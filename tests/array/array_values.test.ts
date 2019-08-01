import * as funArray from '../../src/array';

// import * as mocha from 'mocha';
import * as chai from 'chai';
const expect = chai.expect;

describe('funArray.arrayValues', () => {
  
    it(`arrayValues([4, '3.1', true, 'a', "b"])` , () => {
        let array = [4, '3.1', true, 'a', "b"]
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.arrayValues(array)).to.eql(array);
        expect(funArray.arrayValues(array)).to.deep.equal(array);
    });

    it(`arrayValues({"a":"a", "b":1, "3":true, '4':1.1, 5:'0.2abc'})` , () => {
        let array = {"a":"a", "b":1, "3":true, '4':1.1, '5':'0.2abc'}
        let ret = funArray.arrayValues({"a":"a", "b":1, "3":true, '4':1.1, 5:'0.2abc'})
        let wantedRet = ['a', 1, true, 1.1, "0.2abc"]
    
        for(let value of ret) {
            // console.log(value)
            expect(wantedRet.includes(value)).to.equal(true);
        }

    });
    
    it(`arrayValues(2)` , () => {
        let array = 2
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.arrayValues(array)).to.eql([]);
    });

    it(`arrayValues(true)` , () => {
        let array = true
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.arrayValues(array)).to.eql([]);
    });

});
