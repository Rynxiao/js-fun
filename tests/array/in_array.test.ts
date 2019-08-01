import * as funArray from '../../src/array';

// import * as mocha from 'mocha';
import * as chai from 'chai';
const expect = chai.expect;

describe('funArray.inArray', () => {

  //以下是数字严格模式
  it(`inArray(3.1, {'key':3.1},true)` , () => {
    expect(funArray.inArray(3.1, {'key':3.1},true)).to.equal(true);
  });
  
  it(`inArray(3.1, {'key':'3.1'},true)` , () => {
    expect(funArray.inArray(3.1, {'key':'3.1'},true)).to.equal(false);
  });

  it(`inArray('3.1', {'key':3.1},true)` , () => {
    expect(funArray.inArray('3.1', {'key':3.1},true)).to.equal(false);
  });

  it(`inArray('3.1', {'key':'3.1'},true)` , () => {
    expect(funArray.inArray('3.1', {'key':'3.1'},true)).to.equal(true);
  });

  it(`inArray(3.1, {'key':3.1}, false)` , () => {
    
    expect(funArray.inArray(3.1, {'key':3.1}, false)).to.equal(true);
  });

  it(`inArray(3.1, {'key':'3.1'}` , () => {
    
    expect(funArray.inArray(3.1, {'key':'3.1'}, false)).to.equal(true);
  });

  it(`inArray('3.1', {'key':3.1}, false)` , () => {
    
    expect(funArray.inArray('3.1', {'key':3.1}, false)).to.equal(true);
  });

  it(`inArray('3.1', {'key':'3.1'}, false)` , () => {
    
    expect(funArray.inArray('3.1', {'key':'3.1'}, false)).to.equal(true);
  });

  //以下是数字严格模式
  it(`inArray(3.1, [4, '3.1'],true)` , () => {
    expect(funArray.inArray(3.1, [4, '3.1'],true)).to.equal(false);
  });

  it(`inArray("3.1", [4, '3.1'],true)` , () => {
    expect(funArray.inArray("3.1", [4, '3.1'],true)).to.equal(true);
  });

  it(`inArray(3.1, [4, 3.1],true)` , () => {
    expect(funArray.inArray(3.1, [4, 3.1],true)).to.equal(true);
  });

  it(`inArray('3.1', [4, 3.1],true)` , () => {
    expect(funArray.inArray('3.1', [4, 3.1],true)).to.equal(false);
  });

  //以下是数字非严格模式
  it(`inArray(3.1, [4, '3.1'], false)` , () => {
    expect(funArray.inArray(3.1, [4, '3.1'], false)).to.equal(true);
  });

  it(`inArray("3.1", [4, '3.1'], false)` , () => {
    expect(funArray.inArray("3.1", [4, '3.1'], false)).to.equal(true);
  });

  it(`inArray(3.1, [4, 3.1], false)` , () => {
    expect(funArray.inArray(3.1, [4, 3.1], false)).to.equal(true);
  });

  it(`inArray("3.1", [4, 3.1], false)` , () => {
    expect(funArray.inArray("3.1", [4, 3.1], false)).to.equal(true);
  });
  
  //以下是字符串校验
  it(`inArray("a", ['a', "a"],true)` , () => {
    expect(funArray.inArray("a", ['a', "a"],true)).to.equal(true);
  });

  it(`inArray("a", ['ab', "ac"],true)` , () => {
    expect(funArray.inArray("a", ['ab', "ac"],true)).to.equal(false);
  });

  it(`inArray("a", ['a', "a"], false)` , () => {
    expect(funArray.inArray("a", ['a', "a"], false)).to.equal(true);
  });
  
  it(`inArray("a", ['ab', "ac"], false)` , () => {
    expect(funArray.inArray("a", ['ab', "ac"], false)).to.equal(false);
  });
  
  //以下是缺省模式
  it(`inArray(3.1, [4, '3.1'])` , () => {
    expect(funArray.inArray(3.1, [4, '3.1'])).to.equal(true);
  });
  
  //以下是不可靠的参数
  it(`inArray(3.1, 0)` , () => {
    expect(funArray.inArray(3.1, 0, false)).to.equal(false);
  });
  
  it(`inArray(3.1, 3.1)` , () => {
    expect(funArray.inArray(3.1, 3.1, false)).to.equal(false);
  });
  
  it(`inArray(3.1, false)` , () => {
    expect(funArray.inArray(3.1, false, false)).to.equal(false);
  });

});
