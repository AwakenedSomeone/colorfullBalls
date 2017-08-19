// JavaScript Document
var balls=[];
var canvas_width=1000;
var canvas_height=600;
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
window.onload=function(){
	WINDOW_WIDTH=document.body.clientWidth;
	WIDOW_HEIGHT=document.body.scrollHeight||document.documentElement.clientHeight;
	canvas.width=canvas_width;
	canvas.height=canvas_height;
	//context.globalAlpha=0.7;
	context.globalCompositeOperation="xor";
	addBalls();
	
	setInterval(function(){
		drawBalls(context);
		updateBalls();
		
	},50);
	
};
//绘制小球
function drawBalls(cxt)
{
	cxt.clearRect(0,0,canvas_width,canvas_height);//对一个矩形空间内的图像进行刷新
	cxt.beginPath();
	cxt.fillStyle="#4EB8EB";
	cxt.font="20px sans-serif";
	cxt.textAlign="center";
	cxt.closePath();
	cxt.fillText("第一次自己用Canvas做出小小的作品",500,20);
	
	
	for(var i=0;i<balls.length;i++)
		{
						
			cxt.fillStyle=balls[i].color;
			cxt.beginPath();
			cxt.arc(balls[i].x,balls[i].y,balls[i].r,0,2*Math.PI,true);
			cxt.closePath();
			cxt.fill();		
		}
}
//添加彩色小球
function addBalls()
{
	for(var i=0;i<80;i++)
		{
			var r=Math.random()*20+30;
			var x=Math.random()*canvas_width;
			var y=Math.random()*canvas_height;
			var R=Math.random()*255+1;
			var G=Math.random()*255+1;
			var B=Math.random()*255+1;
			var color="rgb("+R+","+G+","+B+")";
			var vx=Math.random()*10;
			var vy=Math.random()*10;
			balls[i]={
				x:x,
				y:y,
				vx:vx,
				vy:vy,
				r:r,
				color:color
			};
		}
}
//更改小球位置信息
function updateBalls(){
	for(var i=0;i<balls.length;i++)
		{
			balls[i].x+=balls[i].vx;
			balls[i].y+=balls[i].vy;
			if(balls[i].x+balls[i].r>=canvas_width)
				{
					balls[i].x=canvas_width-balls[i].r;
					balls[i].vx=(-1)*balls[i].vx;
				}
			else if(balls[i].x-balls[i].r<=0)
				{
					balls[i].x=balls[i].r;
					balls[i].vx=(-1)*balls[i].vx;
				}
			if(balls[i].y+balls[i].r>=canvas_height)
				{
					balls[i].y=canvas_height-balls[i].r;
					balls[i].vy=(-1)*balls[i].vy;
				}
			else if(balls[i].y-balls[i].r<=0)
				{
					balls[i].y=balls[i].r;
					balls[i].vy=(-1)*balls[i].vy;
				}
		}
}