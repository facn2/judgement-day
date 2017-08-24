const renderQueries = require('../queries/queries')

module.exports = (req, response) => {
	// console.log(req.query)

	const winnerName = req.query.winnerName
	const winnerId = req.query.winnerId
	const loserName = req.query.loserName
	const loserId = req.query.loserId
	const category = req.query.category
	//category is coming back as string

	renderQueries.updateCategoryScore(category, winnerId, loserId, 1, 0, winnerName, loserName, (err, res) => {
		if (err) {
			res.status(500).send('No')
		} 
		console.log('mucho mucho success')
		const data = res
		console.log(data)
		response.render('results', {data}) //dont know where to render this
	})
}