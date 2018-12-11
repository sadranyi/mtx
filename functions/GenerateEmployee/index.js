var Chance = require('chance')
var fake = require('faker')

module.exports = async function (context, req) {
    
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

    context.res = { // status: 200, /* Defaults to 200 */
        body: chance.employee()
    }
}
