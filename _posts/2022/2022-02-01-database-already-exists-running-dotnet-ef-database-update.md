---
title: "Database already exists when running EF Core migrations"
layout: post
author: Dylan Beattie
meta:
  # og_image: /images/posts/2022/2022-01-25-securing-admin-pages-with-aspnet-and-azure-ad.png
  og_description: "Running 'dotnet ef database update' can result in a misleading 'database already exists' error if the user in your connection string doesn't exist in the target database."
  # twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

I'm working on a project that uses Entity Framework Core, and I'm using EF Core Migrations to manage database state. Earlier today, I grabbed a fresh (obfuscated) snapshot of the production database, copied it across to my workstation, and tried to run `dotnet ef database update` to apply the latest migrations from my current branch:

```bash
[14:37:27 INF] Entity Framework Core 6.0.1 initialized 'MyDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer:6.0.1' with options: using lazy loading proxies
[14:37:27 ERR] Failed executing DbCommand (15ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
CREATE DATABASE [my-database]
COLLATE SQL_Latin1_General_CP1_CI_AI;
Failed executing DbCommand (15ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
CREATE DATABASE [my-database]
COLLATE SQL_Latin1_General_CP1_CI_AI;
Microsoft.Data.SqlClient.SqlException (0x80131904): Database 'my-database' already exists. Choose a different database name.
```

It's failing because the database exists... but I know the database exists -- I just created it! It shouldn't be trying to create a new database at all... right?

It turns out that the database exists, but the user account doesn't. My application's `appSettings.development.json` contains a database connection string which specifies a username and password:

```json
{
  "ConnectionStrings": {
    "MyDatabase": "Server=localhost;Database=my-database;User Id=my-user;Password=p@ssw0rd;MultipleActiveResultSets=true;Connect Timeout=1"
  }
}
```

That username/password is still a valid server login on localhost (and, hey, look at that super-secret password right there!), but there's no corresponding user in the `my-database` database, so I'm guessing what happens here is EF Core connects to the server (which works), tries to open the database, can't open it, and so assumes it doesn't exist -- and so attempts to create it, which fails because it already exists.

I recreated the database user linked to the login (and added them to the `db_owner` role so that EF Core has permission to create tables, indexes, etc.):

```sql
USE [my-database]
GO
CREATE USER [my-user] FOR LOGIN [my-user] WITH DEFAULT_SCHEMA=[dbo]
GO
USE [my-database]
GO
ALTER ROLE [db_owner] ADD MEMBER [my-user]
GO
```

 and it worked just fine.