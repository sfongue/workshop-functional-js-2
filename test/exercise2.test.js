const expect = require('chai').expect;
const reverseYolo = require('../src/exercise2').reverseYolo;

describe('GIVEN function reverseYolo', function() {

  it('WHEN my mystery input THEN my wonderful output', function() {

    let whereIsMyMind = [['a', 9], ['b', 10], ['c', 4]];

    expect(whereIsMyMind).to.have.lengthOf(3);

    expect(reverseYolo(whereIsMyMind)).to.eql(360);
  });

});