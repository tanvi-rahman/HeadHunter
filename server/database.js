const mongoose = require('mongoose')
require('dotenv/config')

module.exports = () => {
    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Connected to database"))
}