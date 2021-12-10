

const data = require('./data/data.json'),

    randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    i = randomInt(0, data.length)


    // Get Random Roast
    roast = () => data[i]

module.exports = {
    roast
}
