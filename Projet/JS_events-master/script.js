
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



//fonctionalité 2 : 

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",function(){
  if ( document.getElementsByClassName("navbar-toggler")[0].getAttribute("data-toggle")=="collapse")
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "")
  else 
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "collapse")
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





//Fonctionnalité 5 :
 //Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît 
 //et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
 //Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});


// Fonctionnalité 6 :
//fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "
//celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
//Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
let viewButtons = document.getElementsByClassName("btn btn-sm btn-success")// le bouton view;
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}


//Fonctionnalité 7 :
//Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>
//, la dernière card (en bas à droite) va passer en premier (en haut à gauche). 
//On va pouvoir faire tourner les cards !
 boutonGris = document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[1]
 boutonGris.addEventListener("click", function(){
  document.getElementsByClassName("row")[1].prepend( document.getElementsByClassName("col-md-4")[5] ); //.prepend() insère le contenu spécifié au début des éléments sélectionnés (toujours l'intérieur).  //  fonctionalité 6 :
  let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
  for (let i = 0; i < viewButtons.length; i++){
    viewButtons[i].addEventListener("mouseover" , function(){
      document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
      document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
    });
  }
});


//Fonctionnalité 8 :
//Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. 
//Donc si un utilisateur clique sur le bouton bleu <==, 
//la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

//Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus,
// une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event - cf le cours).

//disabling the link pre
document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[0].href = "#";
document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[0].addEventListener("click", function(){
  document.getElementsByClassName("row")[1].appendChild( document.getElementsByClassName("col-md-4")[0] ); // appendchild  ajoute un   nœud à la fin de la liste des enfants d'un nœud parent spécifié. 
  //  fonctionalité 6 :
  let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
  for (let i = 0; i < viewButtons.length; i++){
    viewButtons[i].addEventListener("mouseover" , function(){
      document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
      document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
    });
  }
});





