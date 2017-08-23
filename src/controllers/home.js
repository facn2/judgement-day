const renderQueries = require('../queries/queries')

//telling server what to do on the home route
module.exports = (req, response) => {
	
	//populate data with mentors and question
	const data = {}

	//generate random number here, use as id
	const mentorId1 = Math.floor((Math.random() * 13) + 1);
	let mentorId2 = Math.floor((Math.random() * 13) + 1);
	while (mentorId1 === mentorId2) {
			mentorId2 = Math.floor((Math.random() * 13) + 1);
	}

	renderQueries.getTwoMentors(mentorId1, mentorId2, (err, res) => {
		if (err) {
			res.status(500).send('Couldn\'t render mentors')
		} 
			data.mentors1 = res[0].name
			data.mentors1Img = res[0].imageurl
			data.mentors2 = res[1].name
			data.mentors2Img = res[1].imageurl
			
				const randomQ = Math.floor((Math.random() * 6) + 1);
				renderQueries.getQuestion(randomQ, (err, res) => {
					if (err) {
						res.status(500).send('Couldn\'t render question')
					}
						data.question = res.question
						data.category = res.category
						console.log(data)
						response.render('home', {data})
				})
	})
}