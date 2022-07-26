import { isPascalCase } from '../src/isPascalCase';

describe('Is pascal case', () => {
  test('should be true if value is pascal case', () => {
    expect(isPascalCase('ThisIsTheSentence')).toBe(true);
  });

  test('should be false if value is pascal case', () => {
    expect(isPascalCase('This is the sentence')).toBe(false);
  });
});
