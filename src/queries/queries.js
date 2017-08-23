const db = require('/../database/db_connection')

const getTwoMentors = (firstId, secondId) => {
  db.query(`SELECT * FROM mentors WHERE id = $1 OR id = $2`, [firstId, secondId]);
};

const getQuestion = (category) => {
  return db.query(`SELECT category, question FROM questions WHERE category = $1`, [category]);
};

module.exports = {
  getTwoMentors,
  getQuestion
};
