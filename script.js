// Éléments du DOM
const postDiv = document.getElementById("postSection");

// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) // Transformation de la réponse reçu au format JSON
.then(posts => {    // Extraction de l'ensemble des post du JSON
posts.forEach(post => {
let section = document.createElement ("section");
if(post.completed==true){
section.classList.add("green")}

else {
   section.classList.add("red");
} 
  

     // Ajout du post au DOM
     let text = document.createTextNode(post.title)
     let titre = document.createElement("h2");
     
   titre.appendChild(text);
   section.appendChild(titre);
   postDiv.appendChild(section);

 });


});
// Création des élments HTML du post à ajouter au DOM



 