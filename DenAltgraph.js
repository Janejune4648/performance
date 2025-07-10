function densitygraph(TempDen,DenAlt) {
            
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("densitygraph");
    const x1=2.1083*TempDen+281
    const y1=-0.0106*DenAlt+503.89

    ctx.drawImage(img, 10, 10);

    ctx.beginPath();
    ctx.moveTo(x1, 610);
    ctx.lineTo(x1, y1);
    ctx.lineTo(155, y1);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    

    
  };