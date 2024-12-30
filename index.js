const express = require('express'); // REQUIRE STUFF
const app = express();
const socketio = require('socket.io');
const server = require('http').createServer(app);
const io = socketio(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // set up the server

let currentStackNum = 0;

let socketsList = {}; // stores an object where the keys are ids and the values are the player number for that id (which value it was assigned)

let socketsList2 = {}; // stores an object where the keys are socket ids and the values are the corresponding socket

let cardsInHands = {};

let claimedNumbers = [];
function lowestAvailableNumber() {
  if (claimedNumbers.length == 0) {
    return 1;
  }
  for (let i = 1; i < claimedNumbers.length + 2; i++) {
    if (!claimedNumbers.includes(i)) {
      console.log(i);
      return i;
    }
  }
}

function removeFromList(list, thing) { // returns list without the first instance of thing
  let rmv = false;
  let outlist = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] == thing && !rmv) {
      rmv = true;
    }
    else {
      outlist.push(list[i]);
    }
  }
  return outlist;
}

function equalsOr(thing, list) {
  return list.includes(thing);
}

let gameState = {};
gameState.happening = "none";

io.on('connection', function(socket) { // this fires when a client joins. the socket argument has the client's properties
  let n = lowestAvailableNumber();
  socket.emit("playerNum", n); // sends the client's newly assigned player number back to it
  socketsList[socket.id] = n; // add the client to socketsList, with its id and number
  socketsList2[socket.id] = socket;
  claimedNumbers.push(n);

  addAllStacks(socket);

  socket.on('disconnect', function() { // this fires when the client (socket) disconnects
    let id = socket.id;
    //io.emit("player disconnected", socketsList[id]); // send the disconnect event to everyone so everyone with a higher player number "slides down" and fills in the empty player number

    claimedNumbers = removeFromList(claimedNumbers, socketsList[id]);

    delete socketsList[id]; // remove the socket from socketsList
    delete socketsList2[id];

  });

  socket.on('updateStack', function(s, n) {
    stacks[s.id] = s;
    s.displayY = s.y;
    //console.log('updated stack with id: ' + s.id);
    io.emit('updateStack', s, n);
  });

  socket.on('addStack', function(lst, n, x, y) {
    let stack = new Stack(lst, x, y);
    stack.lastMovedBy = n;
    console.log('added stack with id: ' + stack.id);
    console.log(stacks.length);
    io.emit('addStack', stack);
  });

  socket.on('cardsInHand', function(c, n) {
    cardsInHands[n] = c;
    io.emit('updateOpponentCIH', c, n);
  });

  socket.on('deleteStack', function(s) {
    delete stacks[s.id];
    io.emit('deleteStack', s);
  });

  socket.on('heads', function() {
    io.emit('heads');
  });

  socket.on('tails', function() {
    io.emit('tails');
  });

  socket.on('updateOpponentHealth', function(amount, num) {
    io.emit('updateOpponentHealth', amount, num);
  });

});

function getPlayerId(player) { // returns the player id by sorting through socketsList and returning the key that corresponds to that id
  let keys = Object.keys(socketsList);
  let values = Object.values(socketsList);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == player) { return keys[i]; }
  }
  return -1;
}

function getSocket(id) { // returns the socket with the given id
  return socketsList2[id];
}

server.listen(3000, function() { // open server
	consolelog('Server listening at port %d', 3000);
});

let consolelogs = true;

function consolelog(msg) { // debug function so i can toggle console logs on/off
  if (consolelogs) {
    console.log(msg);
  }
}

say = console.log;

function Card(frontImage, backImage) {

  this.frontImage = frontImage;
  this.backImage = backImage;
  this.faceup = false;
  this.stack = null;

  return this;
}

let stacks = {};

function Stack(cards, x, y) {

  this.cards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards.stack = this;
  }
  this.x = x;
  this.y = y;
  this.displayY = this.y;
  this.id = currentStackNum;
  this.lastMovedBy = -1;
  currentStackNum++;
  stacks[this.id] = this;
}

let deck = new Stack([
  /* diehards */
  new Card("doombringer", "back"),
  new Card("berserker", "back"),
  new Card("joesprinter", "back"),
  new Card("skeletalmoe", "back"),
  new Card("jerry", "back"),
  new Card("sheepking", "back"),
  new Card("phorlightninggod", "back"),
  new Card("proffesorreginald", "back"),
  new Card("sheepprince", "back"),
  new Card("accelerateddragon", "back"),

  /* ammo */
  new Card("bricks", "back"),
  new Card("bricks", "back"),
  new Card("thefourthwall", "back"),
  new Card("multiplestuffs", "back"),
  new Card("multiplestuffs", "back"),
  new Card("multiplestuffs", "back"),
  new Card("lotsofstuffs", "back"),
  new Card("disappearingstuffs", "back"),

  /* happenings */
  new Card("zap", "back"),
  new Card("zap", "back"),
  new Card("zap", "back"),
  new Card("zap", "back"),
  new Card("zap", "back"),
  new Card("nah", "back"),
  new Card("nah", "back"),
  new Card("deathlaser", "back"),
  new Card("deathlaser", "back"),
  new Card("comparelengths", "back"),
  new Card("summoning", "back"),
  new Card("fakepancake", "back"),
  new Card("removethreats", "back"),
  new Card("lastditcheffort", "back"),
  new Card("flamepact", "back"),
  new Card("magicwall", "back"),
  new Card("blackflag", "back"),
  new Card("wheelbarrow", "back"),
  new Card("somethinghappens", "back"),
  new Card("sheeplaser", "back"),
  new Card("sheeplaser", "back"),

  /* ruffians */
  new Card("itthatcantdie", "back"),
  new Card("itthatcantdie", "back"),
  new Card("sheep", "back"),
  new Card("sheep", "back"),
  new Card("sheep", "back"),
  new Card("sheep", "back"),
  new Card("defensiverock", "back"),
  new Card("defensiverock", "back"),
  new Card("combatwombat", "back"),
  new Card("tamer", "back"),
  new Card("rowdyamelia", "back"),
  new Card("rowdybarry", "back"),
  new Card("rowdyjane", "back"),
  new Card("rowdymike", "back"),
  new Card("rowdynico", "back"),
  new Card("rowdysusan", "back"),
  new Card("rowdyphil", "back"),
  new Card("rowdybill", "back"),
  new Card("stonythecat", "back"),
  new Card("rockythecat", "back"),
  new Card("shrubbery", "back"),
  new Card("lordoftheguys", "back"),
  new Card("averagejoe", "back"),
  new Card("bloguumtheintrovert", "back"),

  /* things */
  new Card("curseoftheshapeshifter", "back"),
  new Card("divinegrace", "back"),
  new Card("lightningrod", "back"),
  new Card("moralquandary", "back"),
  new Card("spiritrecycler", "back"),
  new Card("spike", "back"),
  new Card("metalshirt", "back"),
  new Card("radioactivehat", "back"),

  /* decrees */
  new Card("toomanydiehards", "back"),
  new Card("toomanydiehards", "back"),
  new Card("safety", "back"),
  new Card("greatsavings", "back"),
  new Card("morestuffs", "back"),
  new Card("recoveryboost", "back"),

  /* weathers */
  new Card("quarantine", "weatherback"),
  new Card("rain", "weatherback"),
  new Card("blizzard", "weatherback"),
  new Card("actuallygoodweather", "weatherback"),
  new Card("thunderstorm", "weatherback"),
  new Card("rushhour", "weatherback")

], 91, 64);

let skeletonDeck = new Stack([

  new Card("skeletalpoe", "extraback"),
  new Card("skeletalbo", "extraback"),
  new Card("skeletaljo", "extraback")

], 91, 256);

let animalDeck = new Stack([

  new Card("elephant", "extraback"),
  new Card("evilcrow", "extraback"),
  new Card("python", "extraback"),
  new Card("goodcrow", "extraback"),
  new Card("monkey", "extraback"),
  new Card("cat", "extraback"),
  new Card("dog", "extraback"),
  new Card("rabbit", "extraback"),
  new Card("lion", "extraback"),
  new Card("plague", "extraback"),
  new Card("zombie", "extraback"),
  new Card("replica", "extraback")
], 91, 512 - 64);

let jerryDeck = new Stack([

  new Card("mary", "extraback"),
  new Card("terry", "extraback"),
  new Card("perry", "extraback"),
  new Card("harry", "extraback"),
  new Card("fairy", "extraback")

], 182 + 91, 256);

let spiritDeck = new Stack([

  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback"),
  new Card("spirit", "extraback")

], 182 + 91, 512 - 64);

function addAllStacks(socket) {
  let keys = Object.keys(stacks);
  for (let i = 0; i < keys.length; i++) {
    socket.emit('addStack', stacks[keys[i]]);
  }
}