const slides = [
	["slide1.jpg","Impressions tous formats <span>en boutique et en ligne</span>"],
	["slide2.jpg","Tirages haute définition grand format <span>pour vos bureaux et events</span>"],	
	["slide3.jpg","Grand choix de couleurs <span>de CMJN aux pantones</span>"],	
	["slide4.jpg","Autocollants <span>avec découpe laser sur mesure</span>"]
	];

let recupBannerImage = document.querySelector(".banner-img");
let ouMettreTexte = document.querySelector ("#banner p");
//console.log(recupTexteImage + " ligne 11"); 
let currentIndex = 0;

const dots = document.querySelector(".dots");
let droite = document.querySelector(".arrow_right");
let  gauche = document.querySelector(".arrow_left");

// initialisation des 4 points sous l'immage correspondant au nombre d'éléments dans le tableau
for(let i = 0; i < slides.length; i++){
	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>';
 }
let recupBalisePoints = document.getElementById("dot0");
recupBalisePoints.classList.add("dot_selected"); 

gauche.addEventListener("click", function() {
	currentIndex--;
if(currentIndex <0){
    currentIndex= slides.length - 1;
	}
	miseAjourSlide(); 
});

droite.addEventListener("click",() => {
	currentIndex++;
if(currentIndex >= slides.length ){
    currentIndex = 0 ;
	
}
miseAjourSlide();
});

function miseAjourSlide(){
	//MAJ image
	recupBannerImage.src = `./assets/images/slideshow/${slides[currentIndex][0]}`;
	
	let recupTexte = `${slides[currentIndex][1]}`;
	ouMettreTexte.innerHTML = recupTexte; 	
    
	//MAJ TEXTE
	const allDots = document.querySelectorAll(".dot");
	//création function forEach 
	allDots.forEach((dot, index) => {
		//enlever la classe dot_selected 
		dot.classList.remove('dot_selected');
		//remettre la classe lorsque l'index est égal à currentIndex
		if (index === currentIndex) {
		  dot.classList.add('dot_selected');
		}
	  });
	}	  
