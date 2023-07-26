const db = require('../db')
const {Report, User, Species} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
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

    const report = [
        { 
        userName: user1._id,
        lat: -50,
        lon: 74,
        species: 'Smallmout Bass',
        depth: 15,
        Season: 'Summer',
        lures: 'jig',
        comment: 'Yep thats a fish i couth all right'
        },
        { 
        userName: user2._id,
        lon: -30,
        lat: 25,
        species: 'Carp',
        depth: 10,
        Season: 'Summer',
        lures: 'jig',
        comment: 'Yeah more carp!'
        }
    ]

        const species = [

            { 
                name: report1_id,
                length: '15" ',
                weight: '3.75 lbs'

            },
            {
                name: report2_id,
                length: '30" ',
                weight: '10 lbs'
                }
            ]
    

            await Species.inserMany(species)
            console.log('Species created')

            await Report.insertMany(report)
            console.log('Report Created')
    

}

const run = async () => {
    await main()
    db.clsoe()
}

run()