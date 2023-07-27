const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://berkantozturk:berkant@cluster0.vvx74ph.mongodb.net/'

module.exports = async () => {
    await mongoose.connect(mongoPath , {
        useNewUrlParser : true, 
        useUnifiedTopology : true
    } )
    return mongoose
}