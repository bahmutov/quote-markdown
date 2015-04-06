var qm = require('..');

console.assert(typeof qm === 'object');
console.assert(typeof qm.string === 'function');

var result = qm.string('foo');
console.assert(result === '"foo"', result);

result = qm.em('foo');
console.assert(result === '*foo*', result);

result = qm.code('foo');
console.assert(result === '`foo`', result);

console.log('quote.code("foo") =', qm.code('foo'));
