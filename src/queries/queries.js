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


const updateCategoryScore = (category, mentorId1, mentorId2, mentorScore1, mentorScore2, mentorName1, mentorName2, callbackResult) => {

  const updateRating = (category, mentorScore, mentorId, callback) => {
    db.query(`UPDATE ${category} SET rating = rating + ${mentorScore} WHERE mentor_id = ${mentorId}`, (error, result) => {
      if (error) {
        callback(error);
      } else {
        return callback(null, result);
      }
    });
  }

  const updateRespectiveScore = (category, mentorName, mentorScore, mentorId, callback1) => {
  	console.log('callback1', callback1)
    db.query(`UPDATE ${category} SET ${mentorName} = ${mentorName} + ${mentorScore} WHERE mentor_id = ${mentorId} RETURNING ${mentorName}`, (error, result) => {
      if (error) {
      	callback1(error)
      } else {
        return callback1(null, result);
      }
    });
  }

  updateRating(category, mentorScore1, mentorId1, (error, result1) => {
    if (error) {
      return console.log(error);
    } else {
      return updateRating(category, mentorScore2, mentorId2, (error, result2) => {
        if (error) {
          return console.log(error);
        } else {
          return updateRespectiveScore(category, mentorName2, mentorScore1, mentorId1, (error, result3) => {
            if (error) {
              return console.log(error);
            } else {
              return updateRespectiveScore(category, mentorName1, mentorScore2, mentorId2, (error, response1) => {
                if (error) {
                  return console.log(error);
                } else {
                  callbackResult(null, {result__1: result3, result__2: response1})
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
