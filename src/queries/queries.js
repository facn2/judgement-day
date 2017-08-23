const db = require('../database/db_connection')

const getTwoMentors = (firstId, secondId, callback) => {
  return db.query(`SELECT * FROM mentors WHERE id = $1 OR id = $2`, [firstId, secondId], (err, res) => {
  		if (err) {
  			callback(err)
  		}
  		else {
  			console.log('success')
  			callback(null, res.rows)
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
  			callback(null, res.rows[0])
  		}
  });
};

const updateCategoryScore = (category, mentorId1, mentordId2, mentorScore1, mentorScore2, mentorName1, mentorName2) => {

  const updateRating = (category, mentorScore, mentorId, callback) => {
    db.query(`UPDATE $1 SET rating = rating + $2 WHERE mentor_id = $3`, [category, mentorScore, mentorId], (error, result) => {
      if (error) {
        callback(error);
      } else {
        return callback(null, result);
      }
    });
  }

  const updateRespectiveScore = (category, mentorName, mentorScore, mentorId, callback) => {
    db.query(`UPDATE $1 SET $2 = $2 + $3 WHERE mentor_id = $4 RETURNING $2`, [category, mentorName, mentorScore, mentorId], (error, result) => {
      if (error) {
        callback(error);
      } else {
        return callback(null, result);
      }
    });
  }

  updateRating(category, mentorScore1, mentorId1, (error, result) => {
    if (error) {
      return console.log(error);
    } else {
      updateRating(category, mentorScore2, mentorId2, (error, result) => {
        if (error) {
          return console.log(error);
        } else {
          updateRespectiveScore(category, mentorName2, mentorScore1, mentorId1, (error, result) => {
            if (error) {
              return console.log(error);
            } else {
              updateRespectiveScore(category, mentorName1, mentorScore2, mentorId2, result, (error, response) => {
                if (error) {
                  return console.log(error);
                } else {
                  return {result1: result, result2: response}
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
  getTwoMentors,
  getQuestion,
  updateCategoryScore
};
