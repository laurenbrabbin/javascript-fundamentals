const fetchRepositoryInfo = require('./fetchRepositoryInfo');

class GithubApi {
  fetchRepositoryData (repository, callBack) {
    return fetchRepositoryInfo(repository, callBack)
  }
}

module.exports = GithubApi 
