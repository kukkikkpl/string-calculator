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

  it('//***\\n1***2***3 should be equal to 6', () => {
    const num = Add('//***\n1***2***3');    
    expect(num).equal(6);
  });

  it('-1 should throw error', () => {
    // try {
    //   const num = Add('-1');
    // } catch (err) {
    //   console.log(err)
    //   expect(err).should.throw(Error, /Negatives not allowed/);
    //   console.log('error')
    // }
    
    // expect(num).to.throw();
  });

});
