const db = require('../database/db_connection')

const getTwoMentors = (firstId, secondId, callback) => {
  return db.query(`SELECT * FROM mentors WHERE id = $1 OR id = $2`, [firstId, secondId], (err, res) => {
  		if (err) {
  			callback(err)
  		}
  		else {
  			console.log('success')
  			callback(null, res)
  		}
  });
};

const getQuestion = (categoryId, callback) => {
  return db.query(`SELECT category, question FROM questions WHERE id = $1`, [categoryId], (err, res) => {
  		if (err) {
  			callback(err)
  		}
  		else {
  			console.log('mucho success')
  			callback(null, res)
  		}
  });
};

module.exports = {
  getTwoMentors,
  getQuestion
};
