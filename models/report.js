const {Schema} = require('mongoose')
const { Species } = require('./index')



const  reportSchema = new Schema (
    {
        user: {type: Schema.Types.ObjectId, ref:'User'},
        lon: {type: Number, required: false},
        lat: {type: Number, required: false},
        species: {type: Schema.Types.ObjectId, ref: 'Species', require: true},
        depth: {type: Number, required: false},
        season:{type: String, required: false},
        lures:{ type: String, required: false},
        comment: {type: String, required: false},
    },
    {
        timestamp: true
    }
)


module.exports = reportSchema