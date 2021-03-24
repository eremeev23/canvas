let canvas = document.getElementById('tutorial');
let context = canvas.getContext('2d');
    
    //net
function make(){
    context.beginPath();
    let x = document.getElementById("inp-x").value,
        y = document.getElementById("inp-y").value,
        z = document.getElementById("step").value;
    for (let i = 20; i <= x; i += 20) {
    context.moveTo(i, 20);
    context.lineTo(i, y);
    };
    for (let k = 20; k <= y; k += 20) {
    context.moveTo(20, k);
    context.lineTo(x, k);
    };
    context.strokeStyle = "#700707";
    context.stroke();
};

make();
    //figures
let fgrOne = canvas.getContext('2d');
fgrOne.fillStyle = "#700707";
fgrOne.fillRect (400, 10, 20, 20);
let fgrTwo = canvas.getContext('2d');
fgrTwo.fillStyle = "#700707";
fgrTwo.fillRect (435, 10, 40, 40);
let fgrThree = canvas.getContext('2d');
fgrThree.fillStyle = "#700707";
fgrThree.fillRect (490, 10, 40, 20);
let fgrFour = canvas.getContext('2d');
fgrFour.fillStyle = "#700707";
fgrFour.fillRect (400, 60, 60, 80);
    //moving

// ball.onmousedown = function(e) {

//     let coords = getCoords(fgr);
//     let shiftX = e.pageX - coords.left;
//     let shiftY = e.pageY - coords.top;
      
//     ball.style.position = 'absolute';
//     document.body.appendChild(fgr);
//     moveAt(e);
      
//     fgr.style.zIndex = 1000; // над другими элементами
      
//     function moveAt(e) {
//         fgr.style.left = e.pageX - shiftX + 'px';
//         fgr.style.top = e.pageY - shiftY + 'px';
//     }
      
//     document.onmousemove = function(e) {
//         moveAt(e);
//     };
      
//     fgr.onmouseup = function() {
//         document.onmousemove = null;
//         fgr.onmouseup = null;
//     };
      
//     }
      
//     fgr.ondragstart = function() {
//     return false;
// };
      
// function getCoords(elem) {   // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
