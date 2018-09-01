const defaultFunction = require('../src/index').default;
const { namedFunction } = require('../src/index');

describe('index.test.js', () => {
  it('should run the default export and return Hello, <param>!', () => {
    const result = defaultFunction('something');
    expect(result).toStrictEqual('Hello, something!');
  });

  it('should run the named export and return Goodbye, <param>!', () => {
    const result = namedFunction('something');
    expect(result).toStrictEqual('Goodbye, something!');
  });
});
