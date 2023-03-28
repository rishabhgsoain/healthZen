const express = require('express');
const router = express.Router();
require('../db/connection');
const Register = require('../models/patientRegister')

router.get('/', (req, res) => {
    res.render('./patient');
});

router.post('/', async (req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        if (password === confirmPassword) {
            const registerPatient = new Register({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
            })
            const registerNewPatient = await registerPatient.save();
            res.status(201).render('./patient')
        }
        else {
            res.send('password not matching');
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/login', (req, res) => {
    res.render('./patientLogin');
})

module.exports = router;