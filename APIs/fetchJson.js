const fetchJson = (url, callBack) => {
  const got = require('got');

  const handleReceivedResponse = (response) => {
    callBack(JSON.parse(response.body));
  }
 
  got(url).then(handleReceivedResponse);
}

module.exports = fetchJson
