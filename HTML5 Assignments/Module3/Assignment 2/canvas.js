
function makeCanvas(){
	
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');
	
	ctx1.font = '35pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'DarkSlateGrey';
	
	ctx1.fillText("Shubham",45,150);
	ctx1.strokeText("Shubham",45,150);
	
	
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');
	
	ctx3.strokeStyle = "#000000";
	ctx3.fillStyle="#FFFF00";
	ctx3.lineWidth = 20;

	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(150,200);
	ctx3.lineTo(200,200);
	ctx3.lineTo(200,290);
	ctx3.lineTo(290,290);
	ctx3.lineTo(290,100);
	ctx3.lineTo(100,100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();
	
	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');

	ctx4.fillStyle = "purple";
	
	ctx4.beginPath();
	ctx4.arc(200,30, 25, 0, Math.PI * 2);
	ctx4.fill();
	ctx3.closePath();

	ctx4.fillStyle = "orange";
	
	ctx4.beginPath();
	ctx4.arc(200,100, 45, 0, Math.PI * 2);
	ctx4.fill();
	ctx3.closePath();

	ctx4.fillStyle = "black";
	
	ctx4.beginPath();
	ctx4.arc(200,220, 75, 0, Math.PI * 2);
	ctx4.fill();
	ctx3.closePath();
	
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');
	
	var posX = 0;
	var posY = 0;
	setInterval(function(){
		posX += 1;
		posY += 1;
		
		ctx5.fillStyle="black";
	    ctx5.fillRect(0,0,canvas5.width,canvas5.height);
	
		ctx5.fillStyle="#00FF00";
		ctx5.beginPath();
		ctx5.arc(posX,120, 55, 0, Math.PI * 2);
		ctx5.fill();
		
		ctx5.fillStyle="yellow";
		ctx5.beginPath();
		ctx5.arc(150,posY, 78, 0, Math.PI * 2);
		ctx5.fill();
		
		ctx5.fillStyle="blue";
		ctx5.beginPath();
		ctx5.arc(350,posY, 38, 0, Math.PI * 2);
		ctx5.fill();
	}, 30);
	
}
