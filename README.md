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

## Test it locally:


[https://github.com/mars/create-react-app-buildpack#set-vars-on-heroku](
https://github.com/mars/create-react-app-buildpack#set-vars-on-heroku) 

run 

`yarn start` (or npm start, if you don't have yarn)

(this will include .env file vars), just use VAR_XYZ to use it (see `.env.example`)


## Other notes

important: buildpack: "if yarn is installed locally, the new app will use it instead of npm", this will result in conflict
