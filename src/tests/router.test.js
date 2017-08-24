const tape = require('tape');
const supertest = require('supertest');

tape('I work I work?', (t) => {
	let num = 3.14;
	t.deepEqual(num, 3.14, "NomNomNom");
	t.end();
})

