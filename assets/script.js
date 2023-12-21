const slides = [
	["slide1.jpg","Impressions tous formats <span>en boutique et en ligne</span>"],
	["slide2.jpg","Tirages haute définition grand format <span>pour vos bureaux et events</span>"],	
	["slide3.jpg","Grand choix de couleurs <span>de CMJN aux pantones</span>"],	
	["slide4.jpg","Autocollants <span>avec découpe laser sur mesure</span>"]
	];

let recupBannerImage = document.querySelector(".banner-img"); //init recup image
let ouMettreTexte = document.querySelector ("#banner p"); //init recup texte image

let currentIndex = 0;

const dots = document.querySelector(".dots");
let  gauche = document.querySelector(".arrow_left"); //utilisé pour le click flèche gauche ligne 24
let droite = document.querySelector(".arrow_right"); //utilisé pour le click flèche droite ligne 32

// initialisation des 4 points sous l'immage correspondant au nombre d'éléments dans le tableau
for(let i = 0; i < slides.length; i++){
	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>';  
     // initialisation des textes à utiliser avec un id ici de 0 à 3, la class dot est la même pour chaque élément
	let recupBalisePoints = document.getElementById("dot0"); //initialisation du 1er texte 
    recupBalisePoints.classList.add("dot_selected"); }

gauche.addEventListener("click", function() {
	console.log(currentIndex);
	currentIndex--;	 
	console.log(currentIndex);
if(currentIndex <0){ //condition pour réinitialiser currentIndex qui à -1
    currentIndex= slides.length - 1; //mettre currentIndex à 3
	}
	miseAjourSlide(); 
	console.log(currentIndex);
});

droite.addEventListener("click",() => {
	currentIndex++;
if(currentIndex >= slides.length ){
    currentIndex = 0 ; // retour à l'initialisation
	
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
	//création function forEach non utile d'initialiser la variable index
	allDots.forEach((dot, index) => {
		//enlever la classe dot_selected 
		dot.classList.remove('dot_selected'); //permet d'enlever tous les remplissages des points en retirant la classe
		//remettre la classe lorsque l'index est égal à currentIndex
		if (index === currentIndex) {
		  dot.classList.add('dot_selected'); //permet de remettre  le remplissage du point qui correspond à l'immage
		}
	  });
	}	  
