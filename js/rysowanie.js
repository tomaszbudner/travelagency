const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#ff0000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setSize(n){
	ctx.lineWidth = n;
}

function setColor(color){
	console.log(color);
	ctx.strokeStyle = color.toString();
}

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});



$("#draw").on('mousemove', function(e){
    e.preventDefault();
    draw(e);
    
});

$("#draw").on('mouseup', function(e){
    isDrawing = false;
    
});

$("#draw").on('mouseout', function(e){
    isDrawing = false;
    
});
