const { basename } = require('path')
const mongo = require ('./mongo')
const userSchema= require('./schemas/user-schema')

const connectToMongoDB = async () => {
    await mongo().then (async(mongoose) => {
        try{
            console.log('connected to mongodb')

            const user =   {
                email:'besiktas@gmail.com',
                username: 'bjk',
                password: 'abc'
            }

            await new userSchema(user).save()
        } finally {
            mongoose.connection.close()
        }
    })
}
connectToMongoDB()
