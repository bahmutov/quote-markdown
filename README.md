# quote-markdown

> Safe addition of markdown quotes around a string (bold, emphasis, code)

[![NPM info][nodei.co]](https://npmjs.org/package/quote-markdown)

    npm install quote --save

Use

```js
var quote = require('quote-markdown');
quote.string('foo'); // "foo"
quote.code('foo'); // `foo`
quote.code(quote.code('foo')); // `foo`
quote.em('foo'); // *foo*
quote.bold('foo'); // **foo**
```

Built on top of [quote](https://github.com/bahmutov/quote), great for use with
[debug-logdown](https://github.com/bahmutov/debug-logdown)

```js
var log = require('debug-logdown')('user');
var quote = require('quote-markdown');
log.info('user', quote.em(username), 'logged in at', quote.bold(new Date()));
```    

Author: Gleb Bahmutov &copy; 2014
[@bahmutov](https://twitter.com/bahmutov) [glebbahmutov.com](http://glebbahmutov.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github

[nodei.co]: https://nodei.co/npm/quote-markdown.png?downloads=true
