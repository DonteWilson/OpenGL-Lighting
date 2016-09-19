// classic Phong equation
#version 410

in vec4 vColour;
out vec4 fragColor;
uniform float Time;
void main() 
{  
	vec4 r = vColour;
	r.x = cos(Time);
	r.y += sin(Time);
	
	fragColor = r;
 };