const test = require('tape');
const shot = require('shot');
const router = require('../src/router');
const myrequest = require('../src/myRequest');
const handlers = require('../src/handlers');

test('initial', (t) => {
  let num = 2;
  t.equal(num, 2, 'should return 2');
  t.end();
})

test('Home route', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/'
  }, (res) => {
    t.equal(res.statusCode, 200, 'should response with status code of 200');
    t.end();
  })
})

test('Sunset router', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/sunset?cityname=paris&date=2017-08-03' //fix /sunset url
  }, (res) => {
    t.equal(res.statusCode, 200, 'should response with status code of 200');
    t.equal(res.payload, 'You are searching for paris\nGoogle thinks you are searching Paris, France\nTime in UTC:\nsunrise:4:27:43 AM, sunset:7:25:44 PM')
    t.end();
  })
})

test('Views router', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/views' //fix /sunset url
  }, (res) => {
    t.equal(res.statusCode, 500, 'should response with status code of 500');
    t.equal(res.payload, '<h1>Server error</h1>');
    t.end();
  })
})


test('Sunset router', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/sunset' //fix /sunset url
  }, (res) => {
    t.equal(res.statusCode, 500, 'should response with status code of 500');
    t.equal(res.payload, `<h1>you are not using our UI, are you?</h1>`)
    t.end();
  })
})




//rounter, myrequest, (handlers.js)
