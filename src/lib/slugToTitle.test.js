import slugToTitle from './slugToTitle.js';

describe('slugToTitle', () => {
  it('should unslugify the title', () => {
    const slug = 'welcome-to-the-desert-of-the-real';
    const expectedtitle = 'WELCOME TO THE DESERT OF THE REAL';

    expect(slugToTitle(slug)).toEqual(expectedtitle);
  });
});
