import 'mocha';
import { expect } from 'chai';
import { stringToNum } from '../src/main'

describe('Convert string to number', () => {
  it('Empty string is equal to 0', () => {
    const num = stringToNum('');
    expect(num).equal(0);
  });

  it('3 should be equal to 3', () => {
    const num = stringToNum('3');
    expect(num).equal(3);
  });

  it('1,2 should be equal to 3', () => {
    const num = stringToNum('1,2');
    expect(num).equal(3);
  });

  it('1,2,3 should be equal to 6', () => {
    const num = stringToNum('1,2,3');
    expect(num).equal(6);
  });

  it('1\\n2,3 should be equal to 6', () => {
    const num = stringToNum('1\n2,3');
    expect(num).equal(6);
  });

  it('//;\\n1;2;3 should be equal to 6', () => {
    const num = stringToNum('//;\n1;2;3');    
    expect(num).equal(6);
  });

});
