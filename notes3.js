let a = ['a', 'b', 'c'];
a.push('d');       // add to end
console.log(a);
a.pop();          // remove from end
console.log(a);
a.unshift('z');   // add to start
console.log(a);
a.shift();     // remove from start
console.log(a);

const [perfect,, good] = a; 
console.log(good);

let allGrades = [...a, 'd', 'e', 'f'];
console.log(allGrades);
let goodMovies = ['Back to the future', 'Star Wars'];
let badMovies = ['Oppenhajjmer', 'Thai-tanik'];
let movies = [...goodMovies, ...badMovies];
console.log(movies);

let saveGoodMovies = [...goodMovies];
console.log(saveGoodMovies);

let movieRatings = [
  {name: 'Jumanji', score: 2},
  {name: 'Jurasic Park', score: 5},
  {name: 'James Bond', score: 3}
]

movieRatings.forEach((movie, index) => {
  console.log(index + ' ' + movie.score);
});

const movieRatingsIndexed = movieRatings.map((movie, index) => {
  return { ...movie, id: index, hasId: true};
});

movieRatingsIndexed.forEach(movie => {
  console.log(movie);
})

const okMovies = movieRatings.filter(movie => movie.score >= 3);
console.log(okMovies);

const m = movieRatings.find(movie => movie.name.includes('Park'));
console.log(m);
const m2 = movieRatings.findIndex(movie => movie.name.includes('Bond'));
console.log(m2);

let someGrades = [allGrades.slice(1,3)];
console.log(someGrades);

const isBanger = (movie) => movie.score == 5;
const notGarbage = (movie) => movie.score > 1;

const doBangersExist = movieRatings.some(isBanger);
const garbageFree = movieRatings.every(notGarbage);
console.log(doBangersExist);
console.log(garbageFree);


let scores = [-2, 10, -8, 21, 3];
let scoreResult = scores.reduce((sum, current) => sum + current, -2);

let scorePostitiv = scores.reduce((sum, current) => {
  if (current > 0) return sum + current; return sum;
}, 0)


console.log(scoreResult);
console.log(scorePostitiv);


const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const romanCountdown = roman.reverse();
console.log(romanCountdown);
console.log(roman);

const roman2 = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const romanCountdown2 = [...roman2].reverse(); // not modifying original
console.log(romanCountdown2);
console.log(roman2);


const numnum = [1, 5, 44];
console.log(numnum.sort()); // alphabeicly
console.log(numnum.sort((a,b) => a-b));  // numericly
console.log(numnum.sort((b,a) => a-b));  // desending

let stuff = Array(7);                     // not functional
let stuff2 = [...Array(7)];               // functional
let stuff3 = [...Array(7)].map(_ => 0);   // alternative
let stuff4 = [...Array(7)].fill(0);   // alternative 2
console.log(stuff);
console.log(stuff2);
console.log(stuff3);
console.log(stuff4)

console.log(['a', 'b'] == ['a', 'b']); // looks at reference and NOT content

function areEqual(a1, a2) {
  return a1.length === a2.length && a1.every((_, i) => a1[i] === a2[i]); // looks at content
}
console.log(areEqual(['a', 'b'], ['a', 'b']));
