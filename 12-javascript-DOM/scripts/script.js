// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  
  document.getElementById("titre").innerHTML = "DOMaine des Arbres";
  
  // 3. Changez l'ordre de présentation des images avec flex
  var contenu = document.querySelector(".container");
  contenu.style["flex-direction"] = "column-reverse";

  // 4. Ajoutez le point "Terre" à la liste d'éléments

  var newElement = document.createElement("li");
  var newText = document.createTextNode("Terre");
  newElement.appendChild(newText);
  var position = document.getElementsByTagName("ul")[0];
  position.appendChild(newElement);


  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici
  imageSansLien.parentNode.setAttribute("href", "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg");
  // 6. Modifiez la police du texte pour toutes les éléments de la liste

  var text = document.getElementById("titre");
  text.style.fontFamily=["Courier New"];

  var mot = document.getElementsByTagName("li");
  mot[0].style.fontFamily=["Arial Black"];
  mot[1].style.fontFamily=["Lucida"];
  mot[2].style.fontFamily=["Comic Sans MS"];
  mot[3].style.fontFamily=["Luminari"];

  for(var i = 0; i < 4; i++){
    mot[i].style.fontFamily=["Arial Black"];
  }
};
