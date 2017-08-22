const tape = require('tape');
const supertest = require('supertest');
//add route here

tape('I work I work?', (t) => {
	let num = 3.14;
	t.deepEqual(num, 3.14, "NomNomNom");
	t.end();
})