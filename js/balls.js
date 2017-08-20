// JavaScript Document
var balls=[];
var canvas_width=1000;
var canvas_height=600;
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
//移动标志
var isMove=true;
//主题背景
var themeColor="white";
//特效选择 默认为特效一
var effect="1";
window.onload=function(){
	WINDOW_WIDTH=document.body.clientWidth;
	WIDOW_HEIGHT=document.body.scrollHeight||document.documentElement.clientHeight;
	canvas.width=canvas_width;
	canvas.height=canvas_height;
	//context.globalAlpha=0.7;
	context.globalCompositeOperation="lighter";
	addBalls();
	
	setInterval(function(){
		drawBalls(context);
		if(isMove)
			{
				
				updateBalls();
			}
		
		
	},50);
	
};
//绘制小球
function drawBalls(cxt)
{
	cxt.clearRect(0,0,canvas_width,canvas_height);//对一个矩形空间内的图像进行刷新
	if(effect=="2")
		{
			cxt.globalCompositeOperation="xor";
		}
	else
		{
			cxt.globalCompositeOperation="lighter";
		}
	if(themeColor=="black")
		{
			cxt.fillStyle="black";
			console.log("black theme");
			cxt.fillRect(0,0,canvas.width,canvas.height);
		}

	for(var i=0;i<balls.length;i++)
		{
						
			cxt.fillStyle=balls[i].color;
			cxt.beginPath();
			cxt.arc(balls[i].x,balls[i].y,balls[i].r,0,2*Math.PI,true);
			cxt.closePath();
			cxt.fill();		
		}
		cxt.beginPath();
	cxt.fillStyle="#4EB8EB";
	cxt.font="20px sans-serif";
	cxt.textAlign="center";
	cxt.closePath();
	cxt.fillText("第一次自己用Canvas做出小demo",500,20);
}
//添加彩色小球
function addBalls()
{
	for(var i=0;i<80;i++)
		{
			var r=Math.random()*20+30;
			var x=Math.random()*canvas_width;
			var y=Math.random()*canvas_height;
			var R=Math.round(Math.random()*255+1);
			var G=Math.round(Math.random()*255+1);
			var B=Math.round(Math.random()*255+1);
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

//控制背景
document.getElementById("white-btn").onclick=function(){
	themeColor="white";
	return false;
};
document.getElementById("black-btn").onclick=function(){
	themeColor="black";
	return false;
};
//控制小球运动
document.getElementById("control-btn").onclick=function(){
	if(isMove)
		{
			isMove=false;
			this.text="开始动画";
		}
	else
		{
			isMove=true;
			this.text="暂停动画";
		}
};
//控制特效
document.getElementById("effect-1").onclick=function(){
	effect="1";
	return false;
};
document.getElementById("effect-2").onclick=function(){
	effect="2";
	return false;
};