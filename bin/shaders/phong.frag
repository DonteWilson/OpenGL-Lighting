// classic Phong equation
#version 410
in vec4 vNormal;
in vec4 vColor;
in vec4 vPosition;


uniform vec3 Kd;
uniform vec3 Id;
uniform vec3 Ka;
uniform vec3 Ia;
uniform vec3 Ks;
uniform vec3 Is;
uniform vec3 lightDirection;
uniform vec3 cameraPosition;
uniform float specularPower;



out vec4 fragColor;

void main() 
{  
	vec3 eye = normalize(cameraPosition-vPosition.xyz);
	vec3 n = normalize(vNormal.xyz);
	vec3 light = normalize(lightDirection);
	vec3 Reflection = 2 * dot(n, light) * n - light;

	float lambert = max(0, dot(n,light));
	float specularTerm = pow( max( 0, dot( Reflection, eye) ), specularPower );
	float a = dot(n,vec3(0,1.0f,0));
	vec3 red = vec3(250,0,0);
    vec3 green = vec3(0, 250, 0); 
    vec3 blue = vec3(0, 0, 250);
    vec3 hemisphere = .5f * mix(red, blue, a) + .5f;

	vec3 Ambient = (Ia * .01f) * (Ka) * hemisphere;
	vec3 Diffuse = (Id * .1f) *  lambert * Kd;
	vec3 Specular = Is * Ks * specularTerm ;

	

	fragColor = vec4(Ambient + (10 * Diffuse) + Specular,1.0f);
 }