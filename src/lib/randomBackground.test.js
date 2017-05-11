import randomBackground from './randomBackground.js';

describe('randomBackground', () => {
  it('should include an array', () => {
    expect(Array.isArray(randomBackground)).toEqual(true);
  });
});
