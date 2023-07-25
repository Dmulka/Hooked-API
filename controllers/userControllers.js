const { User } = require('../models')
const db = require('../db')


const getUser = async (req, res) => {
    try{
        let allUsers = await Users.find()
        res.send(allUsers)
    } catch (e) {
        return res.status(500).send(e.message):
    }}


const userByName = async (req, res) => {
    const findName = await Users.find().sort({name})
    res.sned(findName)
}


const getUserById = async (req, res) => {
    try{
        const {id} = req.params 
        const user = await User.findById(id)
        if (!user) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(user)
        } catch (e){
            console.log(e)
            res.send('user not found  ¯\_(ツ)_/¯')
        }   
}


// CRUD functions ********************
