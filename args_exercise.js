// function sum(){
//     let sum = 0;

//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }

//     return sum;
// }

function sum(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }

    return sum;
}

// Function.prototype.myBind = function(ctx){ //Pavlov
//     const that = this; 
//     let args = Array.from(arguments).slice(1);
//     //args = ["meow", "kush"]
//     return function(){
//         return that.apply(ctx, args.concat(Array.from(arguments)));
//         //return that.apply(pavlov, ["meow", "kush"])
//     }
// };


Function.prototype.myBind = function(ctx, ...args){ 
    const that = this; 
    return function(...addArgs){
        return that.call(ctx, ...args.concat(...addArgs));
    }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(n) {
        numbers.push(n);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc, el) => acc + el);
        }
        else {
            return _curriedSum;
        }
    }
}

Function.prototype.curry = function(numArgs){
    let numbers = [];
    const that = this;

    function _curry(num){
        numbers.push(num);
        if(numbers.length === numArgs){
            return that(...numbers);
        } else {
            return _curry;
        }
    }
    return _curry;
};