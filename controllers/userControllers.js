const { User } = require('../models')



/// get all users 
const getUser = async (req, res) => {
    try{
        let allUsers = await User.find()
        res.send(allUsers)
    } catch (e) {
        return res.status(500).send(e.message)
    }}

/// find by name 
const findByName = async (req, res) => {
    try{
        const {name} = req.params
        console.log(name)
        const userName = await User.findOne({name})
        if (!userName) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(userName)
    } catch (e){
        console.log(e)
        res.send('user not found ¯\_(ツ)_/¯')
    }}


/// find by user by Id 
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

// Creat ***********

const createUser = async (req, res) => {
    try {
        const { name, userName, email, password } = req.body;
        const user = await User.create({ name, userName, email, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }}

// Update ***********

    const updateUser = async (req, res,) => {
        try {
            const { id } = req.params 
            const updateUser = await User.findByIdAndUpdate(id, req.body , {new: true,})   
            return res.json(updateUser)
        } catch (e) {
            console.log(e)
            res.status(500).sned('Error! Failed to updte user')
        }
    } 

// Delete ***********

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await User.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).send("User deleted successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }}


module.exports = {
getUser,
findByName,
getUserById,
updateUser,
createUser,
deleteUser
}