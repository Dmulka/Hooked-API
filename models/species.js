const {Schema} = require('mongoose')

const speciesSchema = new Schema (
    {
        name: {type: String, required: true},
        length: {type: String, required: false},
        weight: {type: String, required: false}

    },
    {
        timestamps: true
    }
)

module.exports = speciesSchema  