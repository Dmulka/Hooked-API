const { Report } = require('../models')


/// get all reports
const getReport = async (req, res) => {
    try{
        let allUsers = await Report.find()
        res.send(allUsers)
    } catch (e) {
        return res.status(500).send(e.message)
    }}

/// find by userName
const findByuserName = async (req, res) => {
    try{
        const {name} = req.params
        console.log(name)
        const userName = await Report.findOne({userName})
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
        const report = await Report.findById(id)
        if (!report) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(report)
        } catch (e){
            console.log(e)
            res.send('user not found  ¯\_(ツ)_/¯')
        }   
}


// CRUD functions ********************

// Creat ***********

const createUser = async (req, res) => {
    try {
        const {
            userName,
            lat,
            lon,
            species,
            depth,
            baitUsed,
            comment,
        } = req.body;
        const report = await Report.create(
            { userName, 
                lat, 
                lon, 
                species, 
                depth, 
                baitUsed, 
                comment 
                })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }}

// Update ***********

    const updateReport = async (req, res,) => {
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

const deleteReport = async (req, res) => {
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
        getReport,
        findByuserName,
        getreportById,
        updateReport,
        createUser,
        deleteReport
        }