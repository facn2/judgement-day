const renderQueries = require('../queries/queries')

//telling server what to do on the home route
module.exports = (req, res) => {

	//generate random number here, use as id
	// const mentorId1 = Math.floor((Math.random() * 12) + 1);
	// const mentorId2 = Math.floor((Math.random() * 12) + 1);
		const mentorId1 = 1
		const mentorId2 = 2
	renderQueries.getTwoMentors(mentorId1, mentorId2, (err, res) => {
		if (err) {
			res.status(500).send('Couldn\'t render mentors')
		} 
			console.log(res)
		// return 
	})

	// const randomQ = Math.floor((Math.random() * 2) + 1);
	const randomQ = 1

	renderQueries.getQuestion(randomQ, (err, res) => {
		if (err) {
			res.status(500).send('Couldn\'t render mentors')
		}
			console.log(res)
		// return 
	})

}