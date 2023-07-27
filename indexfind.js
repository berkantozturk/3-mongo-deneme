const mongo = require ('./mongo')
const userSchema= require('./schemas/user-schema')

const connectToMongoDB = async () => {
    await mongo().then (async(mongoose) => {
        try{
            console.log('connected to mongodb')

        const result = await userSchema.find ({
            username: 'berkant',
        })
        console.log('Result' , result)

        } finally {
            mongoose.connection.close()
        }
    })
}
connectToMongoDB()