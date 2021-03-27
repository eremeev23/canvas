var mouse = {
    x: 0,
    y: 0,
  };
var selected = false;       

const submitButton = document.querySelector('.btn');
const deleteButton = document.querySelector('.delete');
const inputX = document.querySelector('.form-control-x');
const inputY = document.querySelector('.form-control-y');

const cnv = document.querySelector('.canvas');
const ctx = cnv.getContext('2d');
    
    //net
    submitButton.addEventListener('click', createNet);
    function createNet(event){
    event.preventDefault();

    ctx.beginPath();
    
    let x = inputX.value,
        y = inputY.value;
    for (let i = 20; i <= x; i += 20) {
    ctx.moveTo(i, 20);
    ctx.lineTo(i, y);
    };

    for (let k = 20; k <= y; k += 20) {
    ctx.moveTo(20, k);
    ctx.lineTo(x, k);
    };

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#985DTD";
    ctx.stroke();
    
    inputX.value = "";
    inputY.value = "";
};

    //clear canvas
deleteButton.addEventListener('click', clearCanvas);
function clearCanvas(event){
  ctx.clearRect(0, 0, 600, 600);
};

    //figures
var Rect = function(...points) {
    this.points = points;
};
Rect.prototype = {
    draw() {
    ctx.fillRect(this.points[0].x, this.points[0].y, this.points[1].x - this.points[0].x, this.points[1].y - this.points[0].y)
    },
    mouseIn() {
    return (
        mouse.x >= this.points[0].x && mouse.x <= this.points[1].x &&
        mouse.y >= this.points[0].y && mouse.y <= this.points[1].y
          )
        }
};
var shapes = [
    new Rect(
      { x: 600, y: 100 },
      { x: 700, y: 200 }
    ),
    new Rect(
      { x: 500, y: 350 },
      { x: 550, y: 450 }
    ),
    new Rect(
      { x: 500, y: 200 },
      { x: 570, y: 300 }
    ),
    new Rect(
        {x: 700, y: 10},
        {x: 750, y: 15}
    )    
  ];
  
      //moving
shapes.forEach(n => n.draw());
  
window.onmousemove = function(e) {
  mouse.x = e.pageX - cnv.offsetLeft;
  mouse.y = e.pageY - cnv.offsetTop;
  
  if (selected) {
    selected.points.forEach(n => {
      n.x += e.movementX;
      n.y += e.movementY;
    });
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    shapes.forEach(n => n.draw());
  }
};
          
 window.onmousedown = function() {
  if (!selected) {
    shapes.forEach(n => {
      if (n.mouseIn(mouse)) {
        selected = n;
      }
    })
  };
};
  
window.onmouseup = function() {
  selected = null;
};
