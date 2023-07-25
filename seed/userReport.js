const db = require('../db')
const {Report, User, Species} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const user = await new User ({
        name: 'John',
        userName: 'jjthefisherman',
        email: '123fake@email.comm',
        address: '888-323-4545'
    })
}
