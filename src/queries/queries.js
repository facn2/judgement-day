const db = require('../database/db_connection')

const getTwoMentors = (firstId, secondId, callback) => {
  return db.query(`SELECT * FROM mentors WHERE id = $1 OR id = $2`, [firstId, secondId], (err, res) => {
  		if (err) {
  			callback(err)
  		}
  		else {
  			callback(res)
  		}
  });
};

const getQuestion = (category, callback) => {
  return db.query(`SELECT category, question FROM questions WHERE category = $1`, [category], (err, res) => {
  		if (err) {
  			callback(err)
  		}
  		else {
  			callback(res)
  		}
  });
};

module.exports = {
  getTwoMentors,
  getQuestion
};
