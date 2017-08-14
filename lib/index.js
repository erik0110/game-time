let style = require('./styles.css');
let Block = require('./block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
console.log(context);

var block1 = new Block(50, 50, 10, 10);
var block2 = new Block(70, 50, 10, 10);
var block3 = new Block(90, 50, 10, 10);
var block4 = new Block(110, 50, 10, 10);

var blocks = [block1, block2, block3, block4]

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].x < canvas.width - 10) || blocks[i].x < canvas.height - 10) {
      blocks[i].move(i * 2),
      blocks[i].draw(context);
      blocks[i].x += i + 1;
      blocks[i].y += i +1;
    } else {
      blocks[i].x = 0;
      blocks[i].y = 0;
    }

  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  blocks.push( new Block( event.))
})
