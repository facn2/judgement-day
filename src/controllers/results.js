const renderQueries = require('../queries/queries')

module.exports = (req, response) => {
	// console.log(req.query)

	const winnerName = req.query.winnerName
	const winnerId = req.query.winnerId
	const loserName = req.query.loserName
	const loserId = req.query.loserId
	const category = req.query.category
	//category is coming back as string
	console.log(winnerName)

	renderQueries.updateCategoryScore(category, winnerId, loserId, 1, 0, winnerName, loserName, (err, res) => {
		if (err) {
			res.status(500).send('No')
		} 
		console.log('mucho mucho success')

		const resultData1 = Object.keys(res.result__1.rows[0])
		const resultHaha = resultData1[winnerName]
		console.log(resultHaha)
		const resultData2 = res.result__2.rows[0]

		response.render('results', {resultData1, resultData2}) 
	})
}