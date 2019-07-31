"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funArray = require("../../src/array");
// import * as mocha from 'mocha';
const chai = require("chai");
const expect = chai.expect;
describe('funArray.array_values', () => {
    it(`array_values([4, '3.1', true, 'a', "b"])`, () => {
        let array = [4, '3.1', true, 'a', "b"];
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.array_values(array)).to.eql(array);
        expect(funArray.array_values(array)).to.deep.equal(array);
    });
    it(`array_values({"a":"a", "b":1, "3":true, '4':1.1, 5:'0.2abc'})`, () => {
        let array = { "a": "a", "b": 1, "3": true, '4': 1.1, '5': '0.2abc' };
        let ret = funArray.array_values({ "a": "a", "b": 1, "3": true, '4': 1.1, 5: '0.2abc' });
        let wantedRet = ['a', 1, true, 1.1, "0.2abc"];
        for (let value of ret) {
            // console.log(value)
            expect(wantedRet.includes(value)).to.equal(true);
        }
    });
    it(`array_values(2)`, () => {
        let array = 2;
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.array_values(array)).to.eql([]);
    });
    it(`array_values(true)`, () => {
        let array = true;
        //这里不能使用 .to.equal 只能使用 .to.eql或者 .to.deep.equal
        expect(funArray.array_values(array)).to.eql([]);
    });
});
