// Ex 1
function outerFunction() {
    var outerVariable = "Hi, ";
    function innerFunction(name) {
    console.log(outerVariable + name);  // Was wird gelogged?
    }
    return innerFunction;
}

var inner = outerFunction();
inner("Closure");

// Ex 2
function outer() {
    var x = 10;
    function inner() {
    console.log(x);  // Was wird gelogged?
    }
    return inner;
}
var innerFunc = outer();
innerFunc();

// Ex 3
function outer() {
  var x = 10;
  function inner() {
    console.log(x);  // Was wird gelogged?
  }
  var x = 20;
  return inner;
}
var innerFunc = outer();
innerFunc();
// Ex 4
function outer() {
  var x = 10;
  function inner() {
    var y = 12;
    console.log(x+y); // Was wird gelogged?
  }
  return inner;
}
var innerFunc = outer();
innerFunc();
// Ex 5
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a); // Was wird gelogged?
// Ex 6 
function test() {
   console.log(a); // Was wird gelogged?
   console.log(foo()); // Was wird gelogged?
   
   var a = 1;
   function foo() {
      return 2;
   }
}
test();
// Ex 7 
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(19); // Was ist firstResult?
var result = firstResult(12); // Was ist result?

// Ex 8 
var fullname = 'Daisy Doe';
var obj = {
   fullname: 'Vera Singh',
   prop: {
      fullname: 'Amar Akbar Anthony',
      getFullname: function() {
         return this.fullname;
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test()); // What wird gelogged?