var Chance = require('chance')
var fake = require('faker')
var axios = require('axios')

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  var chance = new Chance()
  chance.mixin({
    'employee': function(){
        return {
            first: chance.first(),
            last: chance.last(),
            email: chance.email(),
            gender: chance.gender(),
            profession: chance.profession(),
            avatar: chance.avatar()
        };
    }
  });

    var employeeObject = chance.employee();

  context.res = { // status: 200, /* Defaults to 200 */
    body: JSON.parse(employeeObject) };
}
