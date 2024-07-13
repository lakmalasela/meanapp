const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    
},

{
    timestamps: true,
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    }
}
);

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
