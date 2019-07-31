import * as funArray from '../../funArray';

// import * as mocha from 'mocha';
import * as chai from 'chai';
const expect = chai.expect;

describe('funArray.in_array', () => {

  //以下是数字严格模式
  it(`in_array(3.1, {'key':3.1},true)` , () => {
    expect(funArray.in_array(3.1, {'key':3.1},true)).to.equal(true);
  });
  
  it(`in_array(3.1, {'key':'3.1'},true)` , () => {
    expect(funArray.in_array(3.1, {'key':'3.1'},true)).to.equal(false);
  });

  it(`in_array('3.1', {'key':3.1},true)` , () => {
    expect(funArray.in_array('3.1', {'key':3.1},true)).to.equal(false);
  });

  it(`in_array('3.1', {'key':'3.1'},true)` , () => {
    expect(funArray.in_array('3.1', {'key':'3.1'},true)).to.equal(true);
  });

  it(`in_array(3.1, {'key':3.1}, false)` , () => {
    
    expect(funArray.in_array(3.1, {'key':3.1}, false)).to.equal(true);
  });

  it(`in_array(3.1, {'key':'3.1'}` , () => {
    
    expect(funArray.in_array(3.1, {'key':'3.1'}, false)).to.equal(true);
  });

  it(`in_array('3.1', {'key':3.1}, false)` , () => {
    
    expect(funArray.in_array('3.1', {'key':3.1}, false)).to.equal(true);
  });

  it(`in_array('3.1', {'key':'3.1'}, false)` , () => {
    
    expect(funArray.in_array('3.1', {'key':'3.1'}, false)).to.equal(true);
  });

  //以下是数字严格模式
  it(`in_array(3.1, [4, '3.1'],true)` , () => {
    expect(funArray.in_array(3.1, [4, '3.1'],true)).to.equal(false);
  });

  it(`in_array("3.1", [4, '3.1'],true)` , () => {
    expect(funArray.in_array("3.1", [4, '3.1'],true)).to.equal(true);
  });

  it(`in_array(3.1, [4, 3.1],true)` , () => {
    expect(funArray.in_array(3.1, [4, 3.1],true)).to.equal(true);
  });

  it(`in_array('3.1', [4, 3.1],true)` , () => {
    expect(funArray.in_array('3.1', [4, 3.1],true)).to.equal(false);
  });

  //以下是数字非严格模式
  it(`in_array(3.1, [4, '3.1'], false)` , () => {
    expect(funArray.in_array(3.1, [4, '3.1'], false)).to.equal(true);
  });

  it(`in_array("3.1", [4, '3.1'], false)` , () => {
    expect(funArray.in_array("3.1", [4, '3.1'], false)).to.equal(true);
  });

  it(`in_array(3.1, [4, 3.1], false)` , () => {
    expect(funArray.in_array(3.1, [4, 3.1], false)).to.equal(true);
  });

  it(`in_array("3.1", [4, 3.1], false)` , () => {
    expect(funArray.in_array("3.1", [4, 3.1], false)).to.equal(true);
  });
  
  //以下是字符串校验
  it(`in_array("a", ['a', "a"],true)` , () => {
    expect(funArray.in_array("a", ['a', "a"],true)).to.equal(true);
  });

  it(`in_array("a", ['ab', "ac"],true)` , () => {
    expect(funArray.in_array("a", ['ab', "ac"],true)).to.equal(false);
  });

  it(`in_array("a", ['a', "a"], false)` , () => {
    expect(funArray.in_array("a", ['a', "a"], false)).to.equal(true);
  });
  
  it(`in_array("a", ['ab', "ac"], false)` , () => {
    expect(funArray.in_array("a", ['ab', "ac"], false)).to.equal(false);
  });
  
  //以下是缺省模式
  it(`in_array(3.1, [4, '3.1'])` , () => {
    expect(funArray.in_array(3.1, [4, '3.1'])).to.equal(true);
  });
  
  //以下是不可靠的参数
  it(`in_array(3.1, 0)` , () => {
    expect(funArray.in_array(3.1, 0, false)).to.equal(false);
  });
  
  it(`in_array(3.1, 3.1)` , () => {
    expect(funArray.in_array(3.1, 3.1, false)).to.equal(false);
  });
  
  it(`in_array(3.1, false)` , () => {
    expect(funArray.in_array(3.1, false, false)).to.equal(false);
  });

});
