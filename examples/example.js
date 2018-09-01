const defaultFunction = require('../lib').default;
const { namedFunction } = require('../lib');

const defaultVal = defaultFunction('First Default Export');
const val = namedFunction('First Named Export');

console.log(defaultVal);
console.log(val);
