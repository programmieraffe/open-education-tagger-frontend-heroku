# OpenEducationTagger (frontend)

See full docs at:
https://github.com/programmieraffe/open-education-tagger

This is only the README for the reactive-search frontend built with reactjs and heroku buildpack [https://github.com/mars/create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack).

## Setup frontend

OSX/Linux:

1. `git clone https://github.com/programmieraffe/open-education-tagger-frontend.git` (clone the repo to local hard drive)
2. `cd open-education-tagger` (go to directory)

### 1. Local setup

1. use `yarn install` (or `npm install`) to load dependencies
2. create `.env` locally (see .env.example, `cp .env.example .env`)
2. Generate the interface and run it via `yarn start`(or `npm start`), this will include the .env config vars to the interface

`yarn start` should open the interface in your browser and connect to the elasticsearch instance (localhost:3000). Check out Chrome/Firefox developer tools console for errors.

### 2. Deploy to web (heroku)

1. `heroku apps:create YOURAPPNAME --region eu` - create heroku app, this will also add git remote for heroku

2. Configure environment vars: The `.env`is only used for local testing. For hosting on heroku.com the vars need to be configured via `heroku config:set` or via web dashboard (see: [config vars](https://devcenter.heroku.com/articles/config-vars)). Easiest way if you have created .env file - see below.
3. Important: commit all your changes via git (if you changed something)
4. Important: Add buildpack `heroku buildpacks:set mars/create-react-app`

(commit this via

```
git commit --allow-empty -m 'Switch to create-react-app-buildpack'
git push heroku master
```


3. Deploy everything via `git push heroku master` (this will start the build process and deploy the build-folder)
4. open website with `heroku open` 



#### Hint: Set heroku.com config vars from local .env-file

```
sed 's/#[^("|'')]*$//;s/^#.*$//' .env | \ xargs heroku config:set
```

#### Hint: Debug H10 app crashed error

Common error would be that the config is not set correctly (config vars missing)

https://devcenter.heroku.com/articles/troubleshooting-node-deploys

NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        







#### 4.1 Hosting on heroku


#### 4.2 Hosting on github pages

#### 4.3 Hosting on gitlab pages

#### 4.4 Hosting on own webspace
---
OLD README:


Frontend information




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
```
sed 's/#[^("|'')]*$//;s/^#.*$//' .env | \
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
