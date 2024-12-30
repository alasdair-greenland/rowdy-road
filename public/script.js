var game = game;

let handX = 950;

if (!game) {
  game = new Object();
}

game.cardsInHand = 0;

let health = 25;

let socket = io.connect(window.location.origin);

socket.playerNum = 0;

game.recentStackNum = 0;

game.cardDrawing = 0;

game.cardWidth = 87;

socket.on("playerNum", function(num) { // sets socket.player num
  socket.playerNum = num;
  //document.getElementById("test").innerHTML = num;
});

socket.on('player disconnected', function(num) { // reduces player num when a socket disconnects
  if (socket.playerNum > num) {
    socket.playerNum -= 1;
    //document.getElementById("test").innerHTML = socket.playerNum;
  }
});

socket.on('updateOpponentCIH', function(num, n) {
  if (n == socket.playerNum) {
    return;
  }
  document.getElementById("opponentcih").innerHTML = `Opponent has ${num} cards in their hand`;
});

socket.on('updateOpponentHealth', function(amount, num) {
  if (num == socket.playerNum) {
    document.getElementById("health").innerHTML = `Your health: ${amount} HP`;
    return;
  }
  document.getElementById("opponenthealth").innerHTML = `Opponent's health: ${amount} HP`;
});

socket.on('deselect', function() {
  game.selectedStack = null;
  game.stackToSelect = null;
});

game.stacksById = {};

socket.on('heads', function() {
  game.ctx.fillStyle = '#000000';
  game.ctx.font = '50px sans-serif';
  game.ctx.textAlign = 'left';
  game.ctx.fillText("HEADS", 10, 640);
  setTimeout(refreshCanvas, 3000);
});

socket.on('tails', function() {
  game.ctx.fillStyle = '#000000';
  game.ctx.font = '50px sans-serif';
  game.ctx.textAlign = 'left';
  game.ctx.fillText("TAILS", 10, 640);
  setTimeout(refreshCanvas, 3000);
});

function updateCIH() {
  socket.emit('cardsInHand', game.cardsInHand, socket.playerNum);
}

function deleteStack(s) {
  socket.emit('deleteStack', s);
}

socket.on('deleteStack', function(s) {
  delete game.stacksById[s.id];
});

function addStack(lst, x, y) {
  socket.emit('addStack', lst, socket.playerNum, x, y);
}

socket.on('addStack', function(stack) {
  game.recentStackNum = stack.id;
  if (socket.playerNum % 2) {
    stack.displayY = (650 - game.cardWidth / 5 * 7) / 2 - stack.y + ((650 - game.cardWidth / 5 * 7) / 2);
  }
  game.stacksById[stack.id] = stack;
  refreshCanvas();
});

function updateStack(s) {
  s.lastMovedBy = socket.playerNum;
  //s.isBeingMoved = true;
  socket.emit('updateStack', s, socket.playerNum);
}

socket.on('updateStack', function(s, n) {
  if (n == socket.playerNum) {
    return;
  }
  game.stacksById[s.id] = s;
  if (socket.playerNum % 2) {
    s.displayY = (650 - game.cardWidth / 5 * 7) / 2 - s.y + ((650 - game.cardWidth / 5 * 7) / 2);
  }
  else {
    s.displayY = s.y;
  }
  //console.log('updated!! new stack:');
  //console.log(s);
  refreshCanvas();
});

function onLoad() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  game.ctx = ctx;

  canvas.onmousemove = updateMouse;
  canvas.onmousedown = mouseClick;
  canvas.onmouseup = mouseUp;
  canvas.onkeydown = keyH;
  //game.cont = game.createController(canvas, true, function() {});
}

function drawCard(ctx, card) {
  let img = card.faceup ? images[card.frontImage] : images[card.backImage];
  ctx.drawImage(img, 1350 - 223, 23, 200, 280);
  if (game.cardDrawing > 0) {
    //console.log('test');
    ctx.fillStyle = '#000000';
    ctx.font = '30px Roboto';
    ctx.fillText(`(${game.cardDrawing + 1})`, 1300, 325);
  }
}
//let testStack = {};

function drawOutline(s, color) {

  game.ctx.strokeStyle = '#ddeeff';
  game.ctx.lineWidth = 5;
  roundedRect(game.ctx, s.x - 2, s.displayY - 2, game.cardWidth + 4, game.cardWidth / 5 * 7 + 4, 10, 'stroke');
  game.ctx.strokeStyle = color || '#000000';
  game.ctx.lineWidth = 1;
  roundedRect(game.ctx, s.x - 5, s.displayY - 5, game.cardWidth + 10, game.cardWidth / 5 * 7 + 10, 13, 'stroke');
}

function refreshCanvas() {
  game.ctx.fillStyle = '#ddeeff';
  game.ctx.fillRect(0, 0, 1350, 650);
  game.ctx.lineWidth = 1;
  game.ctx.strokeStyle = '#000000';
  game.ctx.strokeRect(0, 0, 1350, 650);
  game.ctx.lineWidth = 5;
  line(game.ctx, handX, 0, handX, 650);

  drawStacks();

  if (game.actionsWindowShown) {
    let s = game.stackToSelect;
    game.ctx.fillStyle = '#00ff55';
    roundedRect(game.ctx, s.x, s.y - 30, 50, 15, 'stroke');
    game.ctx.fillStyle = '#000000';
    game.ctx.font = '15px Roboto';
    game.ctx.textAlign = 'center';
    game.ctx.fillText('Flip top card', s.x + 25, s.displayY - 22);
  }
}

game.currentCIH = 0;

function drawStacks() {
  let keys = Object.keys(game.stacksById);
  game.currentCIH = 0;
  for (let i = 0; i < keys.length; i++) {
    drawStack(game.ctx, game.stacksById[keys[i]]);
  }
  if (game.currentCIH != game.cardsInHand) {
    game.cardsInHand = game.currentCIH;
    updateCIH();
  }
}

function drawStack(ctx, stack, outline) {
  if (stack.x > handX) {
    if (stack.lastMovedBy != socket.playerNum) {
      return;
    }
    else {
      game.currentCIH += stack.cards.length;
    }
  }
  if (stack.isBeingMoved && stack.lastMovedBy != socket.playerNum) {
    drawOutline(stack, '#ff0000');
  }
  if (game.stackToSelect && game.stackToSelect == stack) {
    drawOutline(stack);
    //console.log(game.cardDrawing);
    drawCard(game.ctx, stack.cards[game.cardDrawing]);
  }
  let card = stack.cards[0];
  testStack = stack;

  let img = card.faceup ? images[card.frontImage] : images[card.backImage];
  ctx.drawImage(img, stack.x, stack.displayY, game.cardWidth, game.cardWidth / 5 * 7);
  if (stack.cards.length > 1) {
    ctx.textAlign = 'left';
    ctx.font = '12px Roboto';
    ctx.fillStyle = '#000000';
    ctx.fillText(`(${stack.cards.length})`, stack.x, stack.displayY - 8);
  }
}

game.mouseX = -1;
game.mouseY = -1;
game.mouseDown = false;

game.selectedStackXOff = 0;
game.selectedStackYOff = 0;

game.recentRefreshReason = "none";

function updateMouse(evt) {
  let rect = canvas.getBoundingClientRect();
  game.mouseX = evt.clientX - rect.left - 1;
  game.mouseY = evt.clientY - rect.top - 1;
  if (socket.playerNum % 2) {
    game.mouseY = ((650 - game.cardWidth / 5 * 7) / 2) - game.mouseY + ((650 - game.cardWidth / 5 * 7) / 2) + game.cardWidth / 5 * 7;
  }
  if (game.mouseDown) {
    if (!game.selectedStack) {
      return;
    }
    let s = game.selectedStack;
    s.x = game.mouseX - game.selectedStackXOff;
    s.y = game.mouseY - game.selectedStackYOff;
    if (socket.playerNum % 2) {
      s.displayY = (650 - game.cardWidth / 5 * 7) / 2 - s.y + ((650 - game.cardWidth / 5 * 7) / 2);
    }
    else {
      s.displayY = s.y;
    }
    refreshCanvas();
    s.isBeingMoved = true;
    s.lastMovedBy = socket.playerNum;
    drawStack(game.ctx, s);
    drawOutline(s);
    updateStack(s);
    //drawCard(game.ctx, s.cards[game.cardDrawing]);
    game.recentRefreshReason = 'moved stack';
    return;
  }
  let found = false;
  let stackKeys = Object.keys(game.stacksById);
  let st = game.stackToSelect;
  if (st && isBetween(game.mouseX, st.x, st.x + game.cardWidth) && isBetween(game.mouseY, st.y, st.y + game.cardWidth / 5 * 7)) {
    return;
  }
  for (let i = stackKeys.length - 1; i >= 0 && !found; i--) {
    let s = game.stacksById[stackKeys[i]];
    if (isBetween(game.mouseX, s.x, s.x + game.cardWidth) && isBetween(game.mouseY, s.y, s.y + game.cardWidth / 5 * 7)) {
      if (game.recentRefreshReason == 'draw outline and top card of stack' && s == game.stackToSelect) {
        return;
      }
      if (s.x > handX && s.lastMovedBy != socket.playerNum) {
        return;
      }
      if (s.isBeingMoved || s.inUse) {
        return;
      }
      game.stackToSelect = s;
      game.actionsWindowShown = false;
      refreshCanvas();
      drawStack(game.ctx, s);
      drawOutline(s);
      //drawCard(game.ctx, s.cards[game.cardDrawing]);
      game.recentRefreshReason = 'draw outline and top card of stack';
      found = true;
    }
  }
  if (!found) {
    game.actionsWindowShown = false;
    game.stackToSelect = null;
    game.cardDrawing = 0;
    if (game.recentRefreshReason != 'clear outlines') {
      refreshCanvas();
      game.recentRefreshReason = 'clear outlines';
    }
  } 
}

game.timeOfLastClick = null;
function checkDoubleClick() {
  let date = new Date();
  let timestamp = date.getTime();
  if (!game.timeOfLastClick) {
    game.timeOfLastClick = timestamp;
    return false;
  }
  if (timestamp - game.timeOfLastClick <= 250) {
    game.timeOfLastClick = timestamp;
    return true;
  }
  game.timeOfLastClick = timestamp;
  return false;
}

game.actionsWindowShown = false;

function mouseClick(evt) {

  if (event.button == 0) {
    game.mouseDown = true;
    game.selectedStack = game.stackToSelect;
    if (!game.selectedStack) {
      return;
    }
    game.selectedStackXOff = game.mouseX - game.selectedStack.x;
    game.selectedStackYOff = game.mouseY - game.selectedStack.y;

    if (checkDoubleClick()) {
      game.selectedStack.cards[0].faceup = !game.selectedStack.cards[0].faceup;
      refreshCanvas();
      //drawCard(game.ctx, game.selectedStack.cards[game.cardDrawing]);
      updateStack(game.selectedStack, socket.playerNum);
    }
  }
  else {
    game.rightMouseDown = true;
    game.mouseDown = true;
    if (!game.stackToSelect || game.stackToSelect.cards.length < 2) {
      return;
    }
    addStack([game.stackToSelect.cards[game.cardDrawing]], game.stackToSelect.x + 15, game.stackToSelect.y + 21);
    game.stackToSelect.cards = removeFromList(game.stackToSelect.cards, game.stackToSelect.cards[game.cardDrawing]);
    updateStack(game.stackToSelect, socket.playerNum);
    game.cardDrawing = 0;
    //game.stackToSelect = game.stacksById[Object.keys(game.stacksById)[Object.keys(game.stacksById).length - 1]];
    //game.selectedStack = game.stackToSelect;
    if (!game.selectedStack) {
      return;
    }
    game.selectedStackXOff = game.mouseX - game.selectedStack.x;
    game.selectedStackYOff = game.mouseY - game.selectedStack.y;
    updateStack(game.selectedStack, socket.playerNum);
    //updateMouse(evt);
  }
  
}

function mouseUp(evt) {

  //console.log('up!');

  if (evt.button == 0) {
    game.mouseDown = false;
    if (!game.selectedStack) {
      return;
    }
    game.selectedStack.isBeingMoved = false;
    game.stackToSelect = game.selectedStack;
    game.selectedStack = null;
    let keys = Object.keys(game.stacksById);
    loop:
    for (let i = 0; i < keys.length; i++) {
      let s = game.stackToSelect;
      let s2 = game.stacksById[keys[i]];
      if (s != s2 && !(s2.x > handX && s2.lastMovedBy != socket.playerNum)) {
        if (Math.abs(s.x - s2.x) <= 15 && Math.abs(s.y - s2.y) <= 15) {
          for (let j = s.cards.length - 1; j >= 0; j--) {
            s2.cards.unshift(s.cards[j]);
          }
          deleteStack(s);
          updateStack(s2);
          game.stackToSelect = s2;
          break loop;
        }
      }

    }
    updateStack(game.stackToSelect);
  }
  else {
    game.mouseDown = false;
    game.rightMouseDown = false;
  }
}

function keyH(evt) {
  let s = game.stackToSelect;
  if (evt.key == "f") {
    if (s) {
      let newLst = [];
      for (let i = s.cards.length - 1; i >= 0; i--) {
        s.cards[i].faceup = !s.cards[i].faceup;
        newLst.push(s.cards[i]);
      }
      s.cards = newLst;
      updateStack(s);
      refreshCanvas();
    }
  }
  else if (evt.key == "s") {
    if (s) {
      let available = [];
      let newLst = [];
      for (let i = 0; i < s.cards.length; i++) {
        available.push(i);
      }
      while (available.length > 0) {
        let pos = Math.floor(Math.random() * available.length);
        let n = available[pos];
        newLst.push(s.cards[n])
        available = removeFromList(available, n);
      }

      s.cards = newLst;
      updateStack(s);
      refreshCanvas();
    }
  }
  else if (evt.key == 'ArrowUp') {
    game.cardDrawing--;
    game.cardDrawing = Math.max(0, game.cardDrawing);
    refreshCanvas();
  }
  else if (evt.key == 'ArrowDown') {
    game.cardDrawing++;
    game.cardDrawing = Math.min(game.stackToSelect.cards.length - 1, game.cardDrawing) || 0;
    refreshCanvas();
  }
  else if (evt.key == ' ') {
    let ctx = game.ctx;
    refreshCanvas();
    if (Math.random() < 0.5) {
      socket.emit('heads');
    }
    else {
      socket.emit('tails');
    }
  }
  else if (evt.key == '-') {
    health--;
    socket.emit('updateOpponentHealth', health, socket.playerNum);
  }
  else if (evt.key == '=') {
    health++;
    socket.emit('updateOpponentHealth', health, socket.playerNum);
  }
  //console.log(game.cardDrawing);
}