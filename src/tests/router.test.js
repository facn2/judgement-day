const tape = require('tape');
const supertest = require('supertest');
const app = require('../app')

tape('I work I work?', (t) => {
	let num = 3.14;
	t.deepEqual(num, 3.14, "NomNomNom");
	t.end();
})

tape('First - Get 200 from homepage', (t) => {
	supertest(app)
		.get('/')
		.expect(200)
		.end((err, res) => {
			if (err) t.fail(err)
			t.deepEqual(res.status, 200, 'should be 200');
			t.end()
		})
	})

tape('Second - Get 400 from homepage', (t) => {
	supertest(app)
		.get('/coding-is-hard')
		.expect(400)
		.end((err, res) => {
			if (err) t.fail(err)
			t.deepEqual(res.status, 400, 'should be 400');
			t.end()
		})
	})