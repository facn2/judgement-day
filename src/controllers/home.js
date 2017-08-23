module.exports = (req, res) => {
	res.render('home', { activePage: {home: true}});
}