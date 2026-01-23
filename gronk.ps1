$Env:JEKYLL_ENV = "ngrok"
$ngrok = Start-Process ngrok -ArgumentList "http 4000 --url ngrok.dylanbeattie.net " -PassThru
bundle exec jekyll serve --config ./_config.yml,_config_ngrok.yml
$Env:JEKYLL_ENV = ""
$ngrok.Kill()
