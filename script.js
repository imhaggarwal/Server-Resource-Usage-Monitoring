arr=[[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
function draw(tt){
	canvas=document.getElementById(tt);
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 1400, 500);
	ctx.fillStyle='#E91E63';
	ctx.strokeStyle='#000';
	ctx.setLineDash([7, 5]);
	ctx.beginPath();
	ctx.moveTo(40,0);
	ctx.lineTo(40, 300);
	ctx.moveTo(40,300);
	ctx.lineTo(1500, 300);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle='#E91E63';
	ctx.font = "20px Arial";
	max=100
	ctx.fillText(max+' -',0,20);
	ctx.fillText(50+' -',0,150);
	ctx.fillText('0   -',0,300);
	ctx.fillText('Usage (%)',0,330);
	ctx.fillText('Time',500,330);
	document.getElementById(tt+'-head').innerHTML=tt+' Chart'
	x=70;
	y=20;
	h=299/max;
	if(tt=='bar')
		arr.forEach(function(e) {
			ctx.fillStyle='#E91E63';
			ctx.fillRect(x, 299-h*e[0], 10, h*e[0]);
			ctx.fillStyle='#1EE9A4';
			ctx.fillRect(x+20, 299-h*e[1], 10, h*e[1]);
			x+=60;
		});
	else{
		ctx.setLineDash([0, 0]);
		tem=299-h*arr[0][0];
		ctx.moveTo(x,tem);
		for (var i = 1; i < arr.length; i++) {
			tem=299-h*arr[i][0];
			x+=60;
			ctx.lineTo(x,tem);
		}
		ctx.strokeStyle='#E91E63';
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		x=70;
		ctx.moveTo(x,299-h*arr[0][1]);
		for (var i = 1; i < arr.length; i++) {
			x+=60;
			ctx.lineTo(x,299-h*arr[i][1]);
		}
		ctx.strokeStyle='#1EE9A4'
		ctx.stroke();
		ctx.closePath()
	}
}
var url={
	ram:'ram.php',
	mail:'http://vittrekkingclub.co.in/rammail.php'
}
var email='aggarwalh.com@gmail.com'
function send() {
	$.post(url.mail,
		JSON.stringify({
			'email':email
		}),
	function(data){
	},'json');
}
fl=0
var BreakException = {};
$(document).ready(function() {
	draw('bar')
	draw('line')
	function update() {
		$.post(url.ram, function(data){
			data=data.split('\n')
			arr.shift()
			arr.push(data)
			draw('bar')
			draw('line')
			if(fl==0){
				try{
					arr.slice(arr.length-10, arr.length).forEach(function(e, ind) {
						if(e[0]<=50)
							throw BreakException
						else if(ind==9){
							fl=1
							send()
						}
					});
				}
				catch(ex){}
			}
			update()
		})
	}
	update()
})