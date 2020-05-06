# Vue.js Basic Quiz App

## Prerequisites

- Download Docker Community Edition - https://www.docker.com/community-edition
- NPM (version 6.10.0 and above) - https://www.npmjs.com/get-npm

## Details

This is a basic Vue.js app using various utilities/libraries. 

Below are the various libraries used in the app.

 - [Vuetify](https://vuetifyjs.com/en/) - Vuetify is a Vue UI Library with beautifully handcrafted Material Components.
 - [Vue Router](https://router.vuejs.org/) - Vue Router is the official router for Vue.js.
 - [Vuex](https://vuex.vuejs.org/) - Vuex is a state management pattern + library for Vue.js applications.
 - [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
 - [Charts](https://vue-chartjs.org/) - vue-chartjs is a wrapper for [Chart.js](https://github.com/chartjs/Chart.js) in Vue.
 - [Vue test utils](https://vue-test-utils.vuejs.org) - Vue Test Utils is the official unit testing utility library for Vue.js.

## Installation

 ### Docker based installation

Use the docker [docker-compose](https://docs.docker.com/compose/) to install Vue.js Quiz App

```bash
docker-compose up -d --build
```

 ### Normal installation

Use the [npm](https://www.npmjs.com/) to install Vue.js quiz app

```bash
npm install
npm run serve
```
We should be able to access our Vue.js quiz app on [localhost:8080](http://localhost:8080) .

## Testing

### Frontend Testing

Frontend testing uses [Vue test utils](https://vue-test-utils.vuejs.org) with Jest.

### Running tests
To run tests: `npm run test`

To run tests in docker 
```bash
docker-compose exec frontend /bin/sh
npm run test
```

To run a specific test: `npm run test -t TestName`