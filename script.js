let canvas = document.getElementById('tutorial');
let context = canvas.getContext('2d');
    //net
let x = document.getElementById("inp-x").value;
let y = document.getElementById("inp-y").value;

function make(){
    for (let i = 40; i < x; i += 20) {
    context.moveTo(i, 20);
    context.lineTo(i, y);
    }
    for (let k = 40; k < y; k += 20) {
    context.moveTo(20, k);
    context.lineTo(x, k);
    }
    context.strokeStyle = "#151033";
    context.stroke();
}
make();
    //figures
let fgr = canvas.getContext('2d');
fgr.fillStyle = "#241b55";
fgr.fillRect (300, 10, 20, 20);
fgr.fillRect (335, 10, 40, 40);
fgr.fillRect (390, 10, 40, 20);
fgr.fillRect (300, 60, 60, 80);
