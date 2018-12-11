var axios = require("axios");
var commitUrl = "https://api.adviceslip.com/advice";

module.exports = async function (context, req) {

    axios
      .get(commitUrl)
      .then(function(res) {
          //console.log(res.data.slip.advice);
          context.res = { body: res.data.slip.advice };
      })
      .catch(function(err) {
          context.res = {
              status: 500,
              body: "An Error Occured"
          };
      });
};