const { Species } = require('../models')


/// get all reports
const getSpecies = async (req, res) => {
    try{
        let allUsers = await Report.find()
        res.send(allUsers)
    } catch (e) {
        return res.status(500).send(e.message)
    }}

/// find by userName
const findSpeciesByName = async (req, res) => {
    try{
        const {name} = req.params
        console.log(name)
        const userName = await Species.findOne({userName})
        if (!userName) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(userName)
    } catch (e){
        console.log(e)
        res.send('drive not found')
    }
}

/// find by user by Id 
const getreportById = async (req, res) => {
    try{
        const {id} = req.params 
        const fish = await Species.findById(id)
        if (!fish) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(fish)
        } catch (e){
            console.log(e)
            res.send('user not found  ¯\_(ツ)_/¯')
        }   
}


// CRUD functions ********************

// Creat ***********

const createSpecies = async (req, res) => {
    try {
        const {name, length, weight} = req.body;
        const report = await Species.create({ name, length, weith,})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }}

// Update ***********

    const updateSpecies = async (req, res,) => {
        try {
            const { id } = req.params 
            const updateReport = await Report.findByIdAndUpdate(id, req.body , {new: true,})   
            return res.json(updateReport)
        } catch (e) {
            console.log(e)
            res.status(500).sned('Error! Failed to updte user')
        }
    } 

// Delete ***********

const deleteSpecies = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Report.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.status(200).send("Post deleted successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }}


    module.exports = {
        getSpecies,
        findSpeciesByName,
        createSpecies,
        updateSpecies,
        deleteSpecies
        }