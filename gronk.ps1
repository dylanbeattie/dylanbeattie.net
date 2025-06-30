$Env:JEKYLL_ENV = "ngrok"
$ngrok = Start-Process ngrok -ArgumentList "https --hostname=ngrok.dylanbeattie.net 4000" -PassThru
bundle exec jekyll serve --config ./_config.yml,_config_ngrok.yml
$Env:JEKYLL_ENV = ""
$ngrok.Kill()