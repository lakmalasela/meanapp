const mongoose  = require("mongoose");

const { Schema } = mongoose;

const TopicSchema = new Schema(
    {
    name: {
        type: String,
        require: true
    },
   
 
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    }
}


);

module.exports = mongoose.model("Topic",TopicSchema)