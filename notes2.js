let movie = {type: 'movie', title: "Robin Hood", length: 123};
let movie2 = { ...movie, rating: 10};
console.log(movie2['title']);
console.log('type' in movie2);
// @ts-ignore
delete movie2['length'];
console.log(movie2);
const numbers = [1,2,3,4,5];
console.log(Math.max(...numbers));

(function (){
  console.log('This is a immidiate function that will be called once and once only');
})();

// @ts-ignore
function runTwice(callback) {
  console.log('run one...');
  callback();
  console.log('run two...');
  callback();
}

function cl() {
  console.log('hello world');
}

runTwice(cl);

let sum = (a = 0, b = 0) => {
  return a + b;
};
// @ts-ignore
let sum2 = a => a + 1;

console.log(sum(undefined,2));
console.log(sum2(4));
// @ts-ignore
function logger(...strings) {
  console.log(...strings); 
}
// @ts-ignore
function adder(...numbers) {
  let total = 0;
  numbers.forEach(n => {
    total += n;
  });
  return total;
}


logger(1, 2, 3);
console.log(adder(1,2,3,4));
// @ts-ignore
function divider({top,bot}){
  console.log(top / bot);
}

divider({top:5,bot:2});

function counter(startingValue = 0){
  let c = startingValue;
  return{
    add: () => c++,
    remove: () => c--,
    get: () => c,
  }
}

const myNumber = counter();
console.log(myNumber.get());
myNumber.remove()
console.log(myNumber.get());
myNumber.add()
myNumber.add()
console.log(myNumber.get());

let game = {
  name: "sword of sandals",
  run() {
    console.log('game is running');
  }
}

console.log(game.name);
game.run();
// @ts-ignore
function setName({name}){
  return{
    get name() {
      return name
    },
    set name(newName) {
      if (newName !== 'hej'){ 
      name = newName;
      } else {
        name = newName + ' -FEL';
      }
    }
  }
}
const myName = setName({name:'leo'});
console.log(myName.name);
myName.name = 'effert';
console.log(myName.name);
myName.name = 'hej';
console.log(myName.name);



