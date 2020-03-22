1. create repo on github, clone, change directory to upper directory
2. `npx create-react-app coronacampus-reactivesearch-heroku-frontend`
3. cd coronacampus-reactivesearch-heroku-frontend
4. npm install @appbaseio/reactivesearch
5. Create heroku app with buildpack for react sites:
`heroku create coronacampus --buildpack mars/create-react-app`
6. commit the changes (git commit)
6. Push it: `git push heroku master`
7. Open it: `heroku open`