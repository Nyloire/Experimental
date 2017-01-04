function rad(dir)
{
	return (dir/180)*Math.PI;
}

function ldx(len, dir)
{
	return Math.cos(rad(-dir))*len; 
}

function ldy(len, dir)
{
	return -Math.sin(rad(-dir))*len; 
}

var c = ""
for (var _ = 0; _<360; _+=60) 
{
	c += ldx(70,_)+","+ldy(70,_)+"\n";

}

console.log(c);