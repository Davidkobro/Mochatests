const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function() {
    it('app should return hello', function(){
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){ 
        let result = sayHello();
        assert.typeOf(result, 'string');

    })

    it('addNumbers should be above 5', function() {
        let result = addNumbers(5,5);
        assert.isAbove(result, 5);
    })
});
