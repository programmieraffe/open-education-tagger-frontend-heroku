[https://github.com/mars/create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

https://docs.appbase.io/docs/reactivesearch/v3/overview/quickstart/


1. create repo on github, clone, change directory to upper directory
2. `npx create-react-app coronacampus-reactivesearch-heroku-frontend`
3. cd coronacampus-reactivesearch-heroku-frontend
4. yarn add @appbaseio/reactivesearch
5. Create heroku app with buildpack for react sites:
`heroku create coronacampus --buildpack mars/create-react-app`
6. commit the changes (`git commit -m "Change titles and styling on homepage"`)
6. Push it: `git push heroku master` (deploy)
7. Open it in the web: `heroku open`
8. Env vars are missing, set the following via dashbord or cli

Easiest way:

1. create `.env` locally
2. Set heroku config to these values via
```sed 's/#[^("|'')]*$//;s/^#.*$//' .env | \
  xargs heroku config:set
``` 

(make sure you're in the correct folder)
Source: 
https://www.fomfus.com/articles/how-to-set-heroku-environmental-variables-from-dotenv-env-files

```
heroku config:set REACT_APP_ELASTICSEARCH_INDEXNAME=index1
heroku config:set REACT_APP_ ELASTISEARCH_URL=https://coronacampus-XXXXXX.eu-central-1.bonsaisearch.net:443
heroku config:set REACT_APP_ELASTICSEARCH_AUTH_STRING_READ=XXXX:XXXX
```

## Test it locally:


[https://github.com/mars/create-react-app-buildpack#set-vars-on-heroku](
https://github.com/mars/create-react-app-buildpack#set-
vars-on-heroku) 


Use runtime values (Only supports REACT_APP_*)

yarn add @mars/heroku-js-runtime-env --save

in App.js:
`import runtimeEnv from '@mars/heroku-js-runtime-env';`


run 

`yarn start` (or npm start, if you don't have yarn)

(this will include .env file vars), just use VAR_XYZ to use it (see `.env.example`)


## Other notes

important: buildpack: "if yarn is installed locally, the new app will use it instead of npm", this will result in conflict
