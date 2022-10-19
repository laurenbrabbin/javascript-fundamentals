const fetchRepositoryInfo = (repository, callBack) => {
  const url = `https://api.github.com/repos/${repository}`;

  const got = require('got');

  const handleReceivedResponse = (response) => {
    callBack(JSON.parse(response.body));
  }
 
  got(url).then(handleReceivedResponse);
}

module.exports = fetchRepositoryInfo

  