const db = require('.././database/db_connection');

const getQuestion = (category) => {
  return db.query(`SELECT category, question FROM questions WHERE category = $1`, [category]);
};


const updateCategoryScore = (category, mentorId1, mentordId2, mentorScore1, mentorScore2, mentorName1, mentorName2) = {

  const updateRating = (category, mentorScore, mentorId, callback) => {
    db.query(`UPDATE $1 SET rating = rating + $2 WHERE mentor_id = $3`, [category, mentorScore, mentorId], (error, result) => {
      if (error) {
        callback(error);
      } else {
        return callback(result);
      }
    });
  }

  const updateRespectiveScore = (category, mentorName, mentorScore, mentorId, callback) => {
    db.query(`UPDATE $1 SET $2 = $2 + $3 WHERE mentor_id = $4 RETURNING $2`, [category, mentorName, mentorScore, mentorId], (error, result) => {
      if (error) {
        callback(error);
      } else {
        return callback(result);
      }
    });
  }

  updateRating(category, mentorScore1, mentorId1, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      updateRating(category, mentorScore2, mentorId2, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          updateRespectiveScore(category, mentorName2, mentorScore1, mentorId1, (error, result) => {
            if (error) {
              console.log(error);
            } else {
              DO SOMETHING WITH RESULT
              updateRespectiveScore(category, mentorName1, mentorScore2, mentorId2, (error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  DO SOMETHING WITH RESULT

                }
              })
            }
          })
        }
      })
    }
  })
}

module.exports = {
  getQuestion,
  updateCategoryScore
};
