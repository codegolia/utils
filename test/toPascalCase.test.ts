import { toPascalCase } from '../src/toPascalCase';

describe('Is pascal case', () => {
  test('should be true if value is pascal case', () => {
    expect(toPascalCase('This is the sentence')).toBe('ThisIsTheSentence');
  });

  test('should be false if value is not pascal case', () => {
    expect(toPascalCase('This is the sentence')).not.toBe(
      'This is the sentence'
    );
  });
});
