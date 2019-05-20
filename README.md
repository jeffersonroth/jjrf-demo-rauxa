# jr-rauxa-gh
### Github Username Search by Jeff Roth
See [Heroku App](https://jr-rauxa-gh.herokuapp.com/).

## Briefing

Fisrt contact with Vue.js

Project created with vue-cli

Github API requests made with Axios

Tested with Mocha + Chai + Sinon

Hosted on Heroku + Express server

Heroko Pipeline: Local Branch > Master Branch > Github Notification & Approval > Heroku deployment to Staging App.


## Frontend

As per request, the chosen Frontend framework was Vue.js

Helloword App were generated from the vue-cli command.

Home.vue addapted to be the Home page for the challenge, with hyperlinks to the challenges official pages and author's social media.

Router created for Functional Challenge and Test Page.

Functional.vue renders a input field to enter the username to be requested by Github API. If a username is given, Axios will request it on the API. If is there a match, the app will render the user's avatar image, the number of followers and their avatar images. In case the number of followers is higher than 100, a button to load more results will show.

Test.vue will render hyperlinks to the unit tests source code and results.


## Backend

In order to host the app to Heroku, a Express server were created.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
