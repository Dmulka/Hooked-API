const {Schema} = required('mongoose')

const userSchema = new Schema (
    {
    name: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    },
    {
        timestamps: true 
    }
)
module.exports = userSchema 

