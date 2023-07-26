const {Schema} = require('mongoose')

const speciesSchema = new Schema (
    {
        name: {type: Schema.Types.ObjectId, ref: 'report'},
        length: {type: String, required: true},
        weight: {type: String, required: true}

    },
    {
        timestamps: true
    }
)

module.exports = speciesSchema  