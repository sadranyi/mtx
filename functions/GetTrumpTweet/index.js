var axios = require("axios");
var trumpUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

module.exports = async function (context, req) {
    
    var response = await axios.get(trumpUrl);

    context.res = {
        body: response.data.message
    }
  
}
