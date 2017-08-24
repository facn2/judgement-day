const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

module.exports = (partial, data) => {
	//this is all jack's
	
  // read hbs partial into a variable
  const path = path.join(__dirname, 'src', 'views', 'partials', `${partial}.hbs`);
  const hbs = fs.readFileSync(path, 'utf8');

  // create and return html string using handlebars
  const template = handlebars.compile(hbs);
  const context = { data };
  const html = template(context);

  return html;
};