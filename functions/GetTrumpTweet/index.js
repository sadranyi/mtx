var Chance = require('chance')
var fake = require('faker')
var axios = require('axios')
var trumUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
var msg

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  var chance = new Chance()
  chance.mixin({
    'employee': function () {
      return {
        first: chance.first(),
        last: chance.last(),
        email: chance.email(),
        gender: chance.gender(),
        profession: chance.profession(),
        image: fake.image.avatar()
      }
    }
  })

  axios.get(trumUrl)
    .then(function (res) {
        msg = res.data.message
    })
    .catch(function (err) {
      console.log(err)
    })

  context.res = { // status: 200, /* Defaults to 200 */
    //body: chance.employee()
    body: msg
  }
}
