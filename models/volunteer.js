const db = require('../db');

function getAllVolunteers() {
    return db.any('SELECT * FROM volunteers');
}



module.exports = {
    getAllVolunteers,
   
};
