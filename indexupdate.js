const mongo = require ('./mongo')
const userSchema= require('./schemas/user-schema')

const connectToMongoDB = async () => {
    await mongo().then (async(mongoose) => {
        try{
            console.log('connected to mongodb')

            await userSchema.updateOne(
                {
                username:'berkant',
                },
                {
                username:'melih',
            }
            )
        } finally {
            mongoose.connection.close()
        }
    })
}
connectToMongoDB()