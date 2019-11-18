
//Fonctionnalité 1 :
//On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), 
//tu vas afficher le mot "clique" en console.

document.getElementsByTagName("footer")[0].addEventListener("click", function(){
	console.log(`clique`);
});

//Fonctionnalité 1-bis :
//Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, 
//tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.


let Count = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  Count++;
	console.log(`Click number ${Count}`);
});



// Fonctionnalité 3
Card1 = document.getElementsByClassName("card-body")[0] //pointer sur la première card en entier
console.log(Card1); //affiche la card 
Card1.getElementsByTagName("button")[1].addEventListener("click", function(){
	Card1.getElementsByTagName("p")[0].classList.add("text-danger")
});

//Fonctionnalité 4
//On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. 
//Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe. 
Card2 = document.getElementsByClassName("card-body")[1];
Card2.getElementsByTagName("button")[1].addEventListener("click", function(){
  Card2.getElementsByTagName("p")[0].classList.toggle("text-success");
});
