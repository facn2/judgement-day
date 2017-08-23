const db = require('/../database/db_connection')

const getTwoMentors = (firstId, secondId) => {
  db.query(`SELECT * FROM mentors WHERE id = $1 OR id = $2`, [firstId, secondId]);
};


module.exports = {
  getTwoMentors
};
