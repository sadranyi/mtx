var axios = require("axios");
var commitUrl = "https://api.adviceslip.com/advice";

module.exports = async function (context, req) {

    var response = await axios.get(commitUrl);

    context.res = {
        body: response.data.slip.advice
    }

};