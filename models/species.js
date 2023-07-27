const {Schema} = require('mongoose')

const speciesSchema = new Schema (
    {
        name: {type: String, required: true},
        length: {type: String, required: true},
        weight: {type: String, required: true}

    },
    {
        timestamps: true
    }
)

module.exports = speciesSchema  