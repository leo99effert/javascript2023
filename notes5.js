class Game {
  #owner; // # is used instead of private
  #score;
  static nrOfGames = 0;
  constructor(owner, score) {
    this.#owner = owner;
    this.#score = score;
    Game.nrOfGames++;
  }
  get score(){
    return this.#score;
  }
  set score(newScore){
    this.#score = newScore <= 5 && newScore >= 1 ? newScore : this.#score;
  }
  print() {
    console.log(this.#owner, this.#score);
  }
}
console.log(Game.nrOfGames);
let chess = new Game('Leo', 4);
chess.print();
console.log(Game.nrOfGames);
let go = new Game('Leo', 5);
console.log(Game.nrOfGames);
console.log(chess.score);
chess.score = 5
console.log(chess.score);
chess.score = 3
console.log(chess.score);
chess.score = 6
console.log(chess.score);

class App extends Game {
  type;
  constructor(owner, score, type){
    super(owner, score); // this is how to pass to parent
    this.type = type;
  }
  show() {
    console.log(this.type);
  }
}

let angrybirdies = new App('Finland', 2, 'Iphone');
angrybirdies.print();
angrybirdies.show();

console.log(angrybirdies instanceof App);
console.log(angrybirdies instanceof Game);
console.log(chess instanceof App);