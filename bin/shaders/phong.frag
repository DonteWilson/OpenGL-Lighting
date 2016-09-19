// classic Phong equation
#version 410


in vec4 vNormal;
in vec4 vPosition;
out vec4 fragColor;
uniform vec3 Kd;
uniform vec3 Id;
uniform vec3 Ka;
uniform vec3 Ia;
uniform vec3 lightDirection;
uniform vec3 cameraPosition;


void main() 
{  
	vec4 eye = vPosition - vec4(cameraPosition,1);
	//r.z = 0.25f;



	vec3 light = normalize(lightDirection) * -1;
	vec4 convertLight = vec4(light, 1);
	//vec4 Reflection = 2 * dot(vNormal, convertLight)
	vec4 Ambient = vec4(Ka,1) * vec4(Ia,1);
	vec3 Diffuse = Kd * max(0.0, dot(convertLight,vNormal)) * Id;

	
	//fragColor = Ambient;
	fragColor = vec4(Diffuse,1);
 };