const {Schema} = require('mongoose')

const  reportSchema = new Schema (
    {
        user: {type: Schema.Types.ObjectId, ref:'user' },
        lon: {type: Number, required: true},
        lat: {type: Number, required: true},
        species: [{type: Schema.Types.ObjectId, ref: 'species'}],
        depth: {type: Number, required: true},
        season:{type: String, required: true},
        lures:{ type: String, required: true},
        comment: {type: String, required: true},
    },
    {
        timestamp: true
    }
)


module.exports = reportSchema