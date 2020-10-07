import 'mocha';
import { expect } from 'chai';
import { Add } from '../src/main'

describe('Convert string to number', () => {
  it('Empty string is equal to 0', () => {
    const num = Add('');
    expect(num).equal(0);
  });

  it('3 should be equal to 3', () => {
    const num = Add('3');
    expect(num).equal(3);
  });

  it('1,2 should be equal to 3', () => {
    const num = Add('1,2');
    expect(num).equal(3);
  });

  it('1,2,3 should be equal to 6', () => {
    const num = Add('1,2,3');
    expect(num).equal(6);
  });

  it('1\\n2,3 should be equal to 6', () => {
    const num = Add('1\n2,3');
    expect(num).equal(6);
  });

  it('-1 should throw error', () => {
    try {
      const num = Add('-1');
    } catch (err) {
      expect(err.message).equal('Negatives not allowed: -1');
    }
  });

  it('-1,-2,3 should throw error', () => {
    try {
      const num = Add('-1,-2,3');
    } catch (err) {
      expect(err.message).equal('Negatives not allowed: -1,-2');
    }
  });

  it('1000,2 should be equal to 2', () => {
    const num = Add('1000,2');
    expect(num).equal(1002);
  });

  it('1001 should be equal to 0', () => {
    const num = Add('1001');
    expect(num).equal(0);
  });

  it('//[***]\\n1***2***3 should be equal to 6', () => {
    const num = Add('//[***]\n1***2***3');    
    expect(num).equal(6);
  });

  it('//[*][%]\\n1*2%3 should be equal to 6', () => {
    const num = Add('//[*][%]\n1*2%3');    
    expect(num).equal(6);
  });

  it('//[***][%%%]\\n1***2%%%3 should be equal to 6', () => {
    const num = Add('//[***][%%%]\n1***2%%%3');    
    expect(num).equal(6);
  });

});
