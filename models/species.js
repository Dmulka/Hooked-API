const {Schema} = require('mongoose')

const speciesSchema = new Schema (
    {
        name: {type: Schema.Types.ObjectId, ref: 'report'},
        length: {type: Number, required: true},
        weight: {type: Number, required: true}

    },
    {
        timestamps: true
    }
)

module.exports = speciesSchema  