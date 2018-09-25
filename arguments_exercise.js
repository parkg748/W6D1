function sum(...num) {
  let sum = 0;
  let array = num;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
 Function.prototype.myBind = function(ctx) {
   let that = this;
   let bindArgs = Array.from(arguments).slice(1);
   return function() {
     let callArgs = Array.from(arguments);
     that.apply(ctx, bindArgs.concat(callArgs));
   };
};

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
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

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind2(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

function curriedSum(numArgs) {
  let result = [];
  return function _curriedSum(num) {
    result.push(num);
    if (result.length < numArgs) {
      return _curriedSum;
    } else {
      return result.reduce((acc, el) => acc + el);
    }
  };
}

Function.prototype.curry = function(numArgs) {
  let result = [];
  let that = this;
  return function _curry(num) {
    result.push(num);
    if (result.length < numArgs) {
      return _curry;
    } else {
      return that.apply(null, result);
      // return that(...result);
    }
  };
};
