var Chance = require('chance')

module.exports = async function (context, req) {

    var chance = new Chance()
    
    context.res = { // status: 200, /* Defaults to 200 */
        body: chance.hash({ length: 6, casing: 'upper' })
    }
}