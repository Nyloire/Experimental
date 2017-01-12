var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W=2000; var H=2000;
var count=0;

var particles = [];
for(var i = 0; i < 50; i++)
{
	particles.push(new Create_particle());
}

function Create_particle()
{
	this.x = Math.random()*W;
	this.y = H;

	this.vx = Math.random()*4-1;
	this.vy = Math.random()*3-5;
}

var x=100; var y=100;

	ctx.fillStyle = "black";
	ctx.fillRect(0,0,W,H);


function Draw()
{
	if(count < 50)
	{
		for(var t = 0; t < particles.length; t++)
		{
			var p = particles[t];
			ctx.beginPath();
			ctx.fillStyle = "white";
			ctx.arc(p.x,p.y,5,Math.PI*2,false);
			ctx.fill();

			p.x += p.vx;
			p.y += p.vy;

			if(p.x < -50)p.x = W+20;
			if(p.y < -50)p.y = H+20;
			if(p.x > W+50)p.x = -50;
			if(p.y > H+50)p.y = -50;

			count+=.01;
		}
	}
}

setInterval(Draw, 30);