const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');//require express handlebars
const bodyParser = require('body-parser');

const controllers = require('./controllers/index'); //required controllers folder, where 
const helpers = require('./views/helpers/index')

const app = express();

//SET UP VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //create a view engine that utilizes handlebar
app.engine( 
	'hbs',
	exphbs({ 
		extname: 'hbs',
		layoutsDir: path.join(__dirname, 'views', 'layouts'),
		partialsDir: path.join(__dirname, 'views', 'partials'),
		defaultLayout: 'main',
		helpers: helpers
	})
)

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '..', 'public', 'assets', 'favicon.png')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers); 


app.listen(3000, () => {
  console.log('Magica running on port 3000');
});