var game = game;

if (!game) {
  game = new Object();
}

function isBetween(x, n1, n2, eq) {
  if (eq) {
    if (n1 > n2) {
      return x >= n2 && x <= n1;
    }
    else {
      return x <= n2 && x >= n1;
    }
  }
  else {
    if (n1 > n2) {
      return x > n2 && x < n1;
    }
    else {
      return x < n2 && x > n1;
    }
  }
}

function roundedRect(ctx, x, y, width, height, r, fill) {

  var c = new Path2D();
  c.moveTo(x + r, y); 
  c.lineTo((x + width) - r, y);
  c.arcTo(x + width, y, x + width, y + r, r);
  c.lineTo(x + width, (y + height) - r);
  c.arcTo(x + width, y + height, (x + width) - r, y + height, r);
  c.lineTo(x + r, y + height);
  c.arcTo(x, y + height, x, (y + height) - r, r);
  c.lineTo(x, y + r);
  c.arcTo(x, y, x + r, y, r);

  if (fill == 'fill') {
    ctx.fill(c);
  }
  else {
    ctx.stroke(c);
  }
}

function line(ctx, x1, y1, x2, y2, width) {
  //ctx.lineWidth = width;
  var c = new Path2D();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  ctx.stroke(c);
  //ctx.lineWidth = 1;
}

function circle(ctx, x, y, r, bc) {
  var c = new Path2D(); // this starts the path called c
  c.moveTo(x + r, y); // sets the start point
  c.arc(x, y, r, 0, 2 * Math.PI); // draws an arc around the start point
  ctx.fill(c); // fills the arc
  if (bc) {
    ctx.strokeStyle = bc;
    ctx.stroke(c);
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

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
}

const images = {};

function makeImage(cardData) {
  const canvas2 = document.getElementById("previewCanvas");
  let ctx = canvas2.getContext('2d');
  ctx.fillStyle = '#ddeeff';
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = cardData.color;
  roundedRect(ctx, 0, 0, 500, 700, 50, 'fill');
  ctx.fillStyle = cardData.color2;
  roundedRect(ctx, 25, 25, 450, 650, 50, 'fill');
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 8;
  line(ctx, 25, 100, 475, 100);
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.font = `${cardData.textSize}px sans-serif`;
  ctx.fillText(cardData.cardName, 250, 50 + cardData.textSize/2);
  ctx.font = '35px sans-serif';
  ctx.fillText(cardData.type, 240, 650);
  ctx.textAlign = 'left';
  for (let i = 0; i < cardData.textList.length; i++) {
    ctx.fillText(cardData.textList[i], 40, i * 40 + 150);
  }
  ctx.textAlign = 'center';
  if (cardData.rightBox) {
    line(ctx, 350, 600, 475, 600);
    line(ctx, 350, 600, 350, 675);
    circle(ctx, 350, 600, 4);
    ctx.fillText(`${cardData.attack} / ${cardData.defense}`, 415, 650);
  }
  if (cardData.leftBox) {
    line(ctx, 25, 600, 125, 600);
    line(ctx, 125, 600, 125, 675);
    circle(ctx, 125, 600, 4);
    ctx.fillText(cardData.cost, 75, 650);
  }
  let sn = cardData.saveName;
  let image = canvas2.toDataURL('image/jpeg', 0.2);
  //console.log(image);
  images[sn] = new Image(500, 700);
  images[sn].src = image;
}

let canvas2 = document.getElementById('previewCanvas');
let ctx2 = canvas2.getContext('2d');

ctx2.fillStyle = '#ddeeff';
ctx2.fillRect(0, 0, 500, 700);
ctx2.fillStyle = '#aa3300';
roundedRect(ctx2, 0, 0, 500, 700, 50, 'fill');
ctx2.strokeStyle = '#000000';
ctx2.lineWidth = 8;
for (let i = 0; i < 21; i++) {
  if (i < 20) {
    line(ctx2, 0, (i + 1) * (700 / 21), 500, (i + 1) * (700 / 21));
  }
  for (let j = 0; j < 6; j++) {
    line(ctx2, (2*j + 1 + (i % 2)) * (500 / 12), (i) * (700 / 21), (2*j + 1 + (i % 2)) * (500 / 12), (i + 1) * (700 / 21));
  }
}
ctx2.fillStyle = '#eeeeee';
ctx2.fillRect(150, 300, 200, 100);
ctx2.fillStyle = '#000000';
ctx2.font = '40px sans-serif';
ctx2.textAlign = 'center';
ctx2.fillText("ROWDY", 250, 345);
ctx2.fillText("ROAD", 250, 390);
circle(ctx2, 160, 310, 5);
circle(ctx2, 160, 390, 5);
circle(ctx2, 340, 310, 5);
circle(ctx2, 340, 390, 5);
let image = canvas2.toDataURL('image/jpeg', 0.2);
images['back'] = new Image(500, 700);
images['back'].src = image;

ctx2.fillStyle = '#aaaa00';
ctx2.fillRect(150, 400, 200, 50);
ctx2.fillStyle = '#000000';
ctx2.font = '30px sans-serif';
ctx2.fillText("WEATHER", 250, 435);
let image2 = canvas2.toDataURL('image/jpeg', 0.2);
images['weatherback'] = new Image(500, 700);
images['weatherback'].src = image2;

ctx2.fillStyle = '#aaaa00';
ctx2.fillRect(150, 400, 200, 50);
ctx2.fillStyle = '#000000';
ctx2.font = '30px sans-serif';
ctx2.fillText("EXTRAS", 250, 435);
ctx2.fillStyle = '#ffffff55';
ctx2.fillRect(0, 0, 500, 700);
let image3 = canvas2.toDataURL('image/jpeg', 0.2);
images['extraback'] = new Image(500, 700);
images['extraback'].src = image3;