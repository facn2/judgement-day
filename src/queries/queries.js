const db = require('.././database/db_connection');

const getQuestion = (category) => {
  return db.query(`SELECT category, question FROM questions WHERE category = $1`, [category]);
};


const updateCategoryScore = (category, mentorId1, mentordId2, mentorScore1, mentorScore2,) = {

  return db.query(`UPDATE $1 SET rating = rating + $2`, [category, mentorId1])
}

module.exports = {
  getQuestion,
  updateCategoryScore
};
