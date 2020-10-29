let canvas = document.getElementById('tutorial');
let context = canvas.getContext('2d');
    //net
function make(){
    context.beginPath();
    let x = document.getElementById("inp-x").value,
        y = document.getElementById("inp-y").value;
    for (let i = 20; i <= x; i += 20) {
    context.moveTo(i, 20);
    context.lineTo(i, y);
    };
    for (let k = 20; k <= y; k += 20) {
    context.moveTo(20, k);
    context.lineTo(x, k);
    };
    context.strokeStyle = "#151033";
    context.stroke();
}
make();
    //figures
let fgr = canvas.getContext('2d');
fgr.fillStyle = "#241b55";
fgr.fillRect (400, 10, 20, 20);
fgr.fillRect (435, 10, 40, 40);
fgr.fillRect (490, 10, 40, 20);
fgr.fillRect (400, 60, 60, 80);
