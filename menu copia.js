document.getElementById("hamburguesa").addEventListener("click", ham);
var i=0;
function ham(){
	if (i==0){
		document.getElementById("bottbar").style.display="block";
		i=1;
	}
else{
	document.getElementById("bottbar").style.display="none";
	i=0
}}







document.getElementById("search").addEventListener("click", serc);
var i=0;
function serc(){
	if (i==0){
		document.getElementById("buscass").style.display="flex";
		i=1;
	}
else{
	document.getElementById("buscass").style.display="none";
	i=0
}}

document.getElementById("moto").addEventListener("click", mot);
var k=0;
function mot(){
	if (k==0){
		document.body.style.backgroundColor="slategrey";
		document.getElementById("header").style.backgroundColor="white";
		document.getElementById("bottbar").style.backgroundColor="mediumvioletred";
		document.getElementById("searchButton").style.backgroundColor="mediumvioletred";
		document.getElementById("footer").style.backgroundColor="mediumvioletred";
		k=1;
	}
else{
	document.body.style.backgroundColor="#eaeaea";
		document.getElementById("header").style.backgroundColor="white";
		document.getElementById("bottbar").style.backgroundColor="#89ceae";
		document.getElementById("searchButton").style.backgroundColor="#89ceae";
		document.getElementById("footer").style.backgroundColor="#89ceae";
		k=0;
}}


document.getElementById("moto").addEventListener("click", moti);
var y=0;
function moti(){
	if (y==0){
		document.getElementById("uno").style.borderColor="mediumvioletred";
		document.getElementById("dos").style.borderColor="mediumvioletred";
		document.getElementById("tres").style.borderColor="mediumvioletred";
		document.getElementById("cuatro").style.borderColor="mediumvioletred";
		document.getElementById("cinco").style.borderColor="mediumvioletred";
		document.getElementById("seis").style.borderColor="mediumvioletred";
		document.getElementById("siete").style.borderColor="mediumvioletred";
		document.getElementById("ocho").style.borderColor="mediumvioletred";
		document.getElementById("nueve").style.borderColor="mediumvioletred";
		document.getElementById("header").style.color="black";
		y=1;
		}
else{
	document.getElementById("uno").style.borderColor="#89ceae";
		document.getElementById("dos").style.borderColor="#89ceae";
		document.getElementById("tres").style.borderColor="#89ceae";
		document.getElementById("cuatro").style.borderColor="#89ceae";
		document.getElementById("cinco").style.borderColor="#89ceae";
		document.getElementById("seis").style.borderColor="#89ceae";
		document.getElementById("siete").style.borderColor="#89ceae";
		document.getElementById("ocho").style.borderColor="#89ceae";
		document.getElementById("nueve").style.borderColor="#89ceae";
		y=0;
}}