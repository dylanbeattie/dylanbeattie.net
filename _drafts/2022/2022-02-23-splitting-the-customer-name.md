---
title: "True Names (And Other Dangers)"
layout: post
author: Dylan Beattie
meta:
  og_image: 2022-02-03-true-names-and-other-dangers.png
  og_description: "Why splitting Name into FirstName and LastName is more complicated than you think"
  twitter_card: summary_large_image
typora-copy-images-to: ../../images/posts/2022/
typora-root-url: .\..\..
---

A system I'm working on has a "Customer Name" field on the checkout form. Based on live orders that have been placed through this system to date, it appears that in around 80% of cases, customers put their own name ("Alice Aardvark") in this field -- which is what we want. In the other 20%, they put the name of their company. (There is a separate "Company Name" field for company orders, but that's further down the form so let's assume folks don't see that until it's too late, and then it doesn't occur to them to go back and amend the Customer Name field.)

So, the quite reasonable request comes in: can we split this from CustomerName into two separate fields -- FirstName and LastName? 

> This is not a post about *why*. This is a post about *how*. Names are unbelievably complicated - the W3C has [a very good article](https://www.w3.org/International/questions/qa-personal-names) about handling personal names, and it's also worth reading Patrick McKenzie's famous blog post [Falsehoods Programmers Believe About Names](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names) (or Tony Roger's [expanded version with examples](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/)). In this particular example, the original solution has resulted in incorrect data in about 20% of cases, and zero cases where FirstName/LastName would have caused a problem.

That might look like a relatively straightforward change - add some columns and fields, run a database migration, deploy the new code, done. But it's actually considerably more complicated than that, because as part of this process, any existing orders need to have their CustomerName field split into a FirstName and LastName, and that's way more complicated than it looks. To get it right -- or at least, close enough -- each order needs to be checked manually; and that includes any orders that might come in while the change is being deployed.

For complex changes like this, I tend to break the change down into deployable milestones. What's the smallest amount of work that we can do to get from the current state of the system to the next stable state? Here's how I broke this one down into three separate iterations:

#### **Iteration 1:**

* Add two new columns, `FirstName` and `LastName`, with corresponding properties on the `Order` object.
* Rename the existing `CustomerName` property to `DeprecatedCustomerName`. **Do not rename the associated database column** - instead, I'm going to override the Entity Framework mapping so that the `Order.DeprecatedCustomerName` field will read and write from the `CustomerName` column. 
  * This is not a refactor. We are breaking stuff on purpose; every reference to `CustomerName` should become a compiler error that can be reviewed in turn.
* Create a new readonly property `Order.TemporaryCustomerName`. This should implement fallback behaviour, something like `(FirstName + LastName) ?? DeprecatedCustomerName`, so it'll use the new fields where they're populated and fall back to the old field if not.
* Review every broken reference to the no-longer-existing `CustomerName` field
  * Read/write references, UI elements, etc. should be replaced with code that targets the new `FirstName` / `LastName` properties
  * Read-only references should be updated to read from `TemporaryCustomerName` instead.
* Refactor `TemporaryCustomerName` to `CustomerName`

I'll also need to build something in the admin UI that'll let us view the old `CustomerName`field and edit the new `FirstName`/`LastName` fields, so we can go through and fix the data.

**Result:**

* UI elements and domain logic now updates `FirstName` / `LastName`
* Reports and views still use a field called `CustomerName`, but it's read-only.
* The `CustomerName` column in the database is mapped to the `DeprecatedCustomerName` property.

Once it's live, somebody can go through and populate the missing FirstName/LastName fields for all the existing orders. *(Good luck figuring out what first name and last name are for anybody who entered a company name, or for anybody whose name doesn't conform to Western European naming conventions.)*

#### **Iteration 2:**

* Remove the `DeprecatedCustomerName` property. 
* Replace the implementation of `CustomerName` so that it returns the concatenation of `FirstName` + `" "` + `LastName`

We now have a live system where all new orders are populating `FirstName` + `LastName`, all existing orders have been cleaned up, and any views that use `CustomerName` will get a concatenation of `FirstName` and `LastName`

**Result:**

The `CustomerName` column still exists in the database, and no data has been lost, but there are no longer any references to it anywhere in the code.

Once this is live, we can do a final pass over the data, check there are no outlying records that weren't picked up during the data cleanup in iteration 2, and then 

#### Iteration 3:

* Drop the `CustomerName` column from the database.

It's easy to ignore this part, because letting it hang around for another year or two won't actually break anything... *until* somebody is poking around the data schema trying to build a new view or a report and goes "ah, OK, CustomerName looks like it does what I need" and you're back to square one. 

The end result of all this? I explained what would be involved and we decided not to change it after all; we changed the form heading from "Customer Information" to "Contact Details", and the field label from "Customer Name" to "Full Name", and, so far, that seems to have solved the problem.

Yep, naming things is hard. Especially when the things are humans.





