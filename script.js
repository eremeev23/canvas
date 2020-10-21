let canvas = document.getElementById('tutorial');
let context = canvas.getContext('2d');
    //net
    for (let x = 20; x < 240; x += 20) {
        context.moveTo(x, 20);
        context.lineTo(x, 220);
      }
      
      for (let y = 20; y < 240; y += 20) {
        context.moveTo(20, y);
        context.lineTo(220, y);
      }
      
      context.strokeStyle = "black";
      context.stroke();
    //figures
    let fgr = canvas.getContext('2d');
    fgr.fillRect (300, 10, 20, 20);
    fgr.fillRect (335, 10, 40, 40);
    fgr.fillRect (390, 10, 40, 20);
    fgr.fillRect (300, 60, 60, 80);
