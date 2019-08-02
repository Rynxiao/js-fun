import * as funArray from '../../src/array';
// import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('funArray.arrayValues', () => {

  it(`arrayValues([4, '3.1', true, 'a', "b"])`, () => {
    const array = [4, '3.1', true, 'a', 'b'];
    //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
    expect(funArray.arrayValues(array)).to.eql(array);
    expect(funArray.arrayValues(array)).to.deep.equal(array);
  });

  it(`arrayValues({1 :"a", 2:1, '3':true, '4':1.1, 5:'0.2abc'})`, () => {
    const array = { 1: 'a', 2: 1, '3': true, '4': 1.1, 5: '0.2abc' };
    const ret = funArray.arrayValues(array);
    const wantedRet = ['a', 1, true, 1.1, '0.2abc'];

    expect(ret).to.deep.equal(wantedRet);
  });
});
