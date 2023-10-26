
const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/test-insert', (req, res) => {
    const testData = {
        Name: 'John Doe',
        ContactInfo: 'johndoe@example.com',
        Skills: 'First Aid',
        Availability: true,
        TrainingDetails: 'Trained in 2020',
        Role: 'Type 1 Nurse'
    };

    db.none('INSERT INTO Volunteers(Name, ContactInfo, Skills, Availability, TrainingDetails, Role) VALUES(${Name}, ${ContactInfo}, ${Skills}, ${Availability}, ${TrainingDetails}, ${Role})', testData)
        .then(() => {
            res.json({ message: 'Insert successful!' });
        })
        .catch(error => {
            console.log(error);
            res.json({ message: 'Error inserting data!' });
        });
});

router.get('/test-fetch', (req, res) => {
    db.any('SELECT * FROM Volunteers')
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            res.json({ message: 'Error fetching data!' });
        });
});

module.exports = router;
