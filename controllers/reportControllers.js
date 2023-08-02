const { Report } = require('../models')


/// get all reports
const getReport = async (req, res) => {
    try{
        let allUsers = await Report.find().populate('species')
        res.send(allUsers)
    } catch (e) {
        return res.status(500).send(e.message)
    }}

/// find by userName
const getReportByUser = async (req, res) => {
    try{
        const {userId} = req.params
        console.log(name)
        const userName = await Report.findOne({user: userId})
        if (!userName) throw Error('user not found ¯\_(ツ)_/¯')
        res.json(userName)
    } catch (e){
        console.log(e)
        res.send('species not found')
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

const createReport = async (req, res) => {
    try {
        const {
            user,
            lat,
            lon,
            species,
            depth,
            season,
            lures,
            comment,
        } = req.body;
        const report = await Report.create(
            { user, 
                lat, 
                lon, 
                species, 
                depth, 
                season,
                lures, 
                comment 
                })
        res.status(201).json(report)
    } catch (error) {
        res.status(500).send(error.message)
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
        getReportByUser,
        getreportById,
        updateReport,
        createReport,
        deleteReport
        }