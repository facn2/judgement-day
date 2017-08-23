const db = require('.././database/db_connection');

const getQuestion = (category) => {
  return db.query(`SELECT category, question FROM questions WHERE category = $1`, [category]);
};

module.exports = {
  getQuestion
};
