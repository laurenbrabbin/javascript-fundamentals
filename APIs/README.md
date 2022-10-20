## A Github client

## Objectives

Implement a class that fetches data from a remote API.

## Exercise 1

1. Modify the code in githubRequest.js so it converts the received response body to an object, using JSON.parse, and prints it.

You should get the following output (some part was omitted for clarity):

```zsh
node githubRequest.js

{
  id: 106995,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
  name: 'sinatra',
  full_name: 'sinatra/sinatra',
  private: false,
  owner: {
    login: 'sinatra',
    id: 8312,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
  (...)
  (...)
}
```

## Exercise 2

Create a function fetchJson (in fetchJson.js) which accepts one URL, and one callback function as arguments.

It should send an HTTP request using got to the URL, and calls the given function with the received response's data. This data should be parsed from JSON into a plain JavaScript object.

```javascript
// In node

const fetchJson = require('./fetchJson');

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})
```

This should log:

```zsh
// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   (...)
// ]
```

## Exercise 3
Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which

fetches repository data from Github's API
calls the given callback with the data it receives from the API (as a JS object):

```javascript
const fetchRepositoryInfo = require('./fetchRepositoryInfo');

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});
```
```zsh
// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }
```

## Challenge
Implement a class GithubApi (in githubApi.js) with a method fetchRepositoryData which:

1. fetches repository data from Github's API.
2. calls the given callback with the received data (after transforming the JSON into a JavaScript object).

```javascript
const GithubApi = require('./githubApi');

const api = new GithubApi();

api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
  console.log(repositoryData);
});
```
```zsh
// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }
```

2. Test-drive a class Github which has the following behaviour:

```javascript
const api = new GithubApi();

// We inject the instance of `GithubApi`:
const github = new Github(api);

// This method will delegate to `GithubApi.fetchRepositoryData()`
github.fetch('sinatra/sinatra');

// And after a few moments, this should return a JS object with the repo information.
github.getRepoData();
```
