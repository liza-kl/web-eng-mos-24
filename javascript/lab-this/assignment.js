// Ex 1
var bunny = {
  lovesCarrots: true,
  f: function () {
    return this.lovesCarrots;
  }
}
console.log(bunny.f()) // Was kommt hier raus?

// Ex 2
const call = {
  caller: "mom", 
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};
call.says();
// Ex 3
const call2 = {
  caller: "mom", 
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call2.says;

newCall();
// Ex 4
function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call3 = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall2 = call3.anotherCaller;

newCall2();

// Ex 5 
const call4 = {
  caller: "mom", 
  says: function() {
    const say = () => console.log(this.caller); 
    say();
  }
};

let newCall3 = call4.says;

newCall3();
call4.says();
