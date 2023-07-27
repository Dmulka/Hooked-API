const db = require('../db')

const {Report, User, Species} = require('../models')
console.log("Hello")
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    console.log("Hello")
    await User.deleteMany()
    const user1 = await new User ({
        name: 'John',
        userName: 'jjthefisherman',
        email: '123fake@email.comm',
        password: 'password@123'
    })
    user1.save()

    const user2 = await new User ({
        name: 'Dan',
        userName: 'danFish ',
        email: 'fishing@email.com',
        password: 'password@100'
        
    })
    user2.save()

   

        const species = [

            { 
                name: 'Carp',
                length: '15" ',
                weight: '3.75 lbs'

            },
            {
                name: 'Smallmouth Bass',
                length: '30" ',
                weight: '10 lbs'
                }
            ]
            await Species.deleteMany()
            await Species.insertMany(species)
            console.log('Species created')

            const Bass = await Species.find({name:'Smallmouth Bass'})
            const Carp = await Species.find({name:'Carp'})
            console.log(Bass, Carp)

            const report = [
                { 
                userName: user1._id,
                lat: -50,
                lon: 74,
                species: Bass._id,
                depth: 15,
                season: 'Summer',
                lures: 'jig',
                comment: 'Yep thats a fish i couth all right'
                },
                { 
                userName: user2._id,
                lon: -30,
                lat: 25,
                species: Carp._id,
                depth: 10,
                season: 'Summer',
                lures: 'jig',
                comment: 'Yeah more carp!'
                }
            ]
            await Report.deleteMany()
            await Report.insertMany(report)
            console.log('Report Created')
    

}

const run = async () => {
    console.log("Hello")
    await main()
    db.close()
}

run()