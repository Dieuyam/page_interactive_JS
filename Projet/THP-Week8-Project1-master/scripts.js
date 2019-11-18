
//fonctionalité 1 +1.bis:
let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`Click number ${footerCounter}`);
});

//fonctionalité 2 : Tel que demande dans le cour (ne marche pas :o)

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

//fonctionalité 2-bis:

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",function(){
  if ( document.getElementsByClassName("navbar-toggler")[0].getAttribute("data-toggle")=="collapse")
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "")
  else 
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "collapse")
});

// Fonctionnalité 3 :
let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

//Fonctionnalité 4 :
let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

//Fonctionnalité 5 :
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});;

// Fonctionnalité 6 :
let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

// Fonctionnalité 7  :

document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[1].addEventListener("click", function(){
  document.getElementsByClassName("row")[1].prepend( document.getElementsByClassName("col-md-4")[5] );
  // fix pour la fonctionalité 6 :
  let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
  for (let i = 0; i < viewButtons.length; i++){
    viewButtons[i].addEventListener("mouseover" , function(){
      document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
      document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
    });
  }
});

//Fonctionnalité 8 :
//disabling the link pre
document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[0].href = "#";
document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[0].addEventListener("click", function(){
  document.getElementsByClassName("row")[1].appendChild( document.getElementsByClassName("col-md-4")[0] );
  // fix pour la fonctionalité 6 :
  let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
  for (let i = 0; i < viewButtons.length; i++){
    viewButtons[i].addEventListener("mouseover" , function(){
      document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
      document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
    });
  }
});

let rowCreation = false;
//Fonctionnalité 9 :
function handleEvent(e){
   if(e //EVENT 'A'
       &&
      e.keyCode === 65 
   ){ // 4 colonnes Bootstrap à gauche de l'écran
      console.log("LEFT");
      if (rowCreation){ //on change juste la disposition
        for (let i = 1; i < 7; i++){
          document.getElementsByClassName("row")[i].classList.remove("d-flex")
          document.getElementsByClassName("row")[i].classList.remove("justify-content-center")
          document.getElementsByClassName("row")[i].classList.remove("flex-row-reverse")
        }
      }else{
        rowCreation = true;
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        for (let i = 2; i < 7; i++){
          document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }

   }
   if(e //EVENT 'Y'
       &&
      e.keyCode === 89
   ){ //4 colonnes Bootstrap à milieu de l'écran
      console.log("CENTER");

      if (rowCreation){ //on change juste la disposition
        for (let i = 1; i < 7; i++){
          document.getElementsByClassName("row")[i].classList.remove("flex-row-reverse")
          document.getElementsByClassName("row")[i].classList.add("d-flex")
          document.getElementsByClassName("row")[i].classList.add("justify-content-center")
        }
      }else{
        rowCreation = true;
        document.getElementsByClassName("row")[1].classList.add("d-flex")
        document.getElementsByClassName("row")[1].classList.add("justify-content-center")
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row");
          node.classList.add("d-flex");
          node.classList.add("justify-content-center");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        let cards = document.getElementsByClassName("col-md-4");
        for (let i = 2; i < 7; i++){
            document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }
   }
   if(e //EVENT 'P'
       &&
      e.keyCode === 80 
   ){ //4 colonnes Bootstrap à droite de l'écran
      console.log("RIGHT");
      if (rowCreation){ //on change juste la disposition
        for (let i = 1; i < 7; i++){
          document.getElementsByClassName("row")[i].classList.remove("d-flex")
          document.getElementsByClassName("row")[i].classList.remove("justify-content-center")
          document.getElementsByClassName("row")[i].classList.add("flex-row-reverse")
        }
      }else{
        rowCreation = true;
        document.getElementsByClassName("row")[1].classList.add("flex-row-reverse")
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row");
          node.classList.add("flex-row-reverse");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        let cards = document.getElementsByClassName("col-md-4");
        for (let i = 2; i < 7; i++){
            document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }
  }
  if(e //EVENT 'B'
       &&
      e.keyCode === 66 
   ){ // tout redeviens normal
      console.log("RESET");
      if(rowCreation){
        rowCreation = false;
        //on replace les cards
        for (let i = 1; i < 6; i++){
          document.getElementsByClassName("row")[1].appendChild( document.getElementsByClassName("col-md-4")[i] );
        }
        //on delete les rows
        for (let i = 0; i < 5; i++){
          console.log("remove");
          console.log(document.getElementsByClassName("row")[2]);
          document.getElementsByClassName("row")[2].remove();
        }
      }
   }
}
document.getElementsByClassName("navbar-brand")[0].addEventListener("click", handleEvent);
document.getElementsByClassName("navbar-brand")[0].addEventListener("keyup", handleEvent);



