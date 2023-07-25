const {Schema} = require('mongoose')

const  reportSchema = new Schema (
    {
        userName: {type: Schema.Types.ObjectId, ref:'user' },
        location: {type: String, required: true},
        species: {type: String, required: true},
        depth: {type: Number, required: true},
        bait_used:{ type: String, required: true},
        comment: {type: String, required: true},
    },
    {
        timestamp: true
    }
)


module.exports = reportSchema