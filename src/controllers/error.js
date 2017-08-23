exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'main',
    statusCode: 404,
    errorMessage: 'Experiencing difficulties - please come back and be judgemental later'
  })
}

exports.server = (req, res) => {
  res.status(500).render('error', {
    layout: 'main',
    statusCode: 500,
    errorMessage: 'Experiencing internal difficulties - express is hard, please don\'t judge us'
  })
}
