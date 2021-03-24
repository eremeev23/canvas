const submitButton = document.querySelector('.btn');
const inputX = document.querySelector('.form-control-x');
const inputY = document.querySelector('.form-control-y');

let canvas = document.getElementById('tutorial');
let context = canvas.getContext('2d');
    
    //net
    submitButton.addEventListener('click', make);
    function make(event){
    event.preventDefault();

    context.beginPath();

    let x = inputX.value,
        y = inputY.value;

    for (let i = 20; i <= x; i += 20) {
    context.moveTo(i, 20);
    context.lineTo(i, y);
    };

    for (let k = 20; k <= y; k += 20) {
    context.moveTo(20, k);
    context.lineTo(x, k);
    };

    context.strokeStyle = "#000000";
    context.stroke();

    inputX.value = "";
    inputY.value = "";
};

    //figures
let fgrOne = canvas.getContext('2d');
fgrOne.fillStyle = "#000000";
fgrOne.fillRect (700, 10, 20, 20);

let fgrTwo = canvas.getContext('2d');
fgrTwo.fillStyle = "#000000";
fgrTwo.fillRect (735, 10, 40, 40);

let fgrThree = canvas.getContext('2d');
fgrThree.fillStyle = "#000000";
fgrThree.fillRect (790, 10, 40, 20);

let fgrFour = canvas.getContext('2d');
fgrFour.fillStyle = "#000000";
fgrFour.fillRect (700, 60, 60, 80);
    //moving

// fgrOne.onmousedown = function(e) {

//     let coords = getCoords(fgrOne);
//     let shiftX = e.pageX - coords.left;
//     let shiftY = e.pageY - coords.top;
      
//     fgrOne.style.position = 'absolute';
//     document.body.appendChild(fgrOne);
//     moveAt(e);
      
//     fgrOne.style.zIndex = 1000; // над другими элементами
      
//     function moveAt(e) {
//         fgrOne.style.left = e.pageX - shiftX + 'px';
//         fgrOne.style.top = e.pageY - shiftY + 'px';
//     }
      
//     document.onmousemove = function(e) {
//         moveAt(e);
//     };
      
//     fgrOne.onmouseup = function() {
//         document.onmousemove = null;
//         fgrOne.onmouseup = null;
//     };
      
//     }
      
//     fgrOne.ondragstart = function() {
//     return false;
// };
      
// function getCoords(elem) {   // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
