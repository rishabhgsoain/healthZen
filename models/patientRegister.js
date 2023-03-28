const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    phone: {
        type: String,
        required: true,
        unique: true,
    },

    gender: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },

    confirmPassword: {
        type: String,
        required: true,
    }
});

const Register = new mongoose.model('Patient', patientSchema);
module.exports = Register;