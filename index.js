// ============================================================================================================================================================================================================================================================================================================================================================================================================
//                L        A         M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE       X   X  M   M  L      H   H  TTTTT  TTTTT  PPPP   RRRR   EEEEE   QQQ   U   U  EEEEE   SSS   TTTTT
//      /      /  L       A A        MM MM  E        T    H   H  O   O  D  D   E            X X   MM MM  L      H   H    T      T    P   P  R   R  E      Q   Q  U   U  E      S        T
//     /      /   L      A   A       M M M  EEE      T    HHHHH  O   O  D   D  EEE           X    M M M  L      HHHHH    T      T    P   P  R   R  EEE    Q   Q  U   U  EEE     SSS     T
//    /      /    L      AAAAA       M   M  E        T    H   H  O   O  D   D  E            X X   M   M  L      H   H    T      T    PPPP   RRRR   E      Q Q Q  U   U  E          S    T
//   /      /     L      A   A       M   M  E        T    H   H  O   O  D  D   E           X   X  M   M  L      H   H    T      T    P      R  R   E      Q  Q   U   U  E          S    T
//  /      /      LLLLL  A   A       M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       X   X  M   M  LLLLL  H   H    T      T    P      R   R  EEEEE   QQ Q   UUU   EEEEE  SSSS     T
// ============================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //La méthode XMLHttpRequest
//est la méthode qui est avant le fetch
//permet de faire des requçetes d'aller chercher des api des fichiers text ,du json etc....
function reqListener() {
   // console.log(this.responseText);
}
//pour aller chercher des données
let req = new XMLHttpRequest(); //du vieux js

req.onload = reqListener ;//au chargement tu m'envois un fonction " reqListener"

// req.open('get', 'data.txt', true);

// req.open("get", "data.json", true);

// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();


// =============================================================================================================================================================================================================================================================================================================================================
//                FFFFF  EEEEE  TTTTT   CCC   H   H       L        A         M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE
//      /      /  F      E        T    C   C  H   H       L       A A        MM MM  E        T    H   H  O   O  D  D   E
//     /      /   FFF    EEE      T    C      HHHHH       L      A   A       M M M  EEE      T    HHHHH  O   O  D   D  EEE
//    /      /    F      E        T    C      H   H       L      AAAAA       M   M  E        T    H   H  O   O  D   D  E
//   /      /     F      E        T    C   C  H   H       L      A   A       M   M  E        T    H   H  O   O  D  D   E
//  /      /      F      EEEEE    T     CCC   H   H       LLLLL  A   A       M   M  EEEEE    T    H   H   OOO   DDD    EEEEE
// =============================================================================================================================================================================================================================================================================================================================================
// * * * //FETCH la méthode

//FETCH = va chercher
//LESSON les API le fectch 15min 31s
 //une fois que l'on a été cherché (alors,ensuite) on créer une promesse (response)avec une fonction fléchée
//  fetch( "https://www.theguardian.com/environment/climate-crisis")
//  .then((response) =>{
//    console.log(response);

//     })
//     .catch((err)=> console.log(err));//une fois que la fonction est exécutée tu attrapes l'erreur et tu la log

// fetch("data.txt")
// .then((res) =>{
//    console.log(res);
// })



//pour aller chercher un fichier txt
//il va chercher data.txt
//il exécute la response de la méthode text
//il m'affiche le dossier data.txt en log
//fetch("data.txt")
//then((res) => res.text())
//.then((data) => console.log(data));


//pour aller chercher un fichier .json
//il va chercher json.txt
//il exécute la response de la méthode json
// il m'affiche le dossier data.json en log
fetch("data.json")
.then((res) => res.json())
.then((data) => console.log(data));

//lesson API 27 MIN 25S

//faire passer un object dans le fetch

const myHeaders = new Headers();

const init = {
method:"GET",//GET c'est pour obtenir de base on est en GET qui veut dire fournit moi les données pour lire les données
header: myHeaders,
mode:"cors",//ce qui gére les permissions pour faire des requêtes
Cache:"default"
};
 fetch("data.json",init)
.then((res) => 
console.log(res));

//-----------------------------------------------------------------------------------------------------
//CRUD => Create (POST), read (GET),update (PUT),Delete (DELETE) les méthodes les 4 plus populaires

//j 'ai simulé un seveur JSON Lesson api 1H 06 et je vais créer un post poster un message sur cette base de donnée

const init2 = {
method: "POST",  // le POST on lui passe ces donnée là donc il faut un body
headers: {
   "Content-Type": "application/json" //le headers permet de travailler avec des cookies d'authentification "token"pour se faire reconnaître
},
body: JSON.stringify({    // l'objet javascript que je te passe je le transforme en json
pseudo:"Doberman",
message:"Comment ça va!",
age: 25
}),
mode: "cors",
credentials: "same-origin",
};

//je créer un formulaire pour éviter que le fetch solicite non stop mon serveur json
// SIMULATION server json
document.querySelector("form").addEventListener("submit", () => {
fetch("http://localhost:3000/users/", init2).then(() =>
 console.log("data envoyée")
);
});

// =======================================================================================================================================================================================================================================================================================================
//                  A     SSS   Y   Y  N   N   CCC   H   H  RRRR    OOO   N   N  EEEEE
//      /      /   A A   S      Y   Y  NN  N  C   C  H   H  R   R  O   O  NN  N  E
//     /      /   A   A   SSS    Y Y   N N N  C      HHHHH  R   R  O   O  N N N  EEE
//    /      /    AAAAA      S    Y    N  NN  C      H   H  RRRR   O   O  N  NN  E
//   /      /     A   A      S    Y    N   N  C   C  H   H  R  R   O   O  N   N  E
//  /      /      A   A  SSSS     Y    N   N   CCC   H   H  R   R   OOO   N   N  EEEEE
// =======================================================================================================================================================================================================================================================================================================
// * * * //Asynchrone 

setTimeout (() => {   
//console.log("test");  test apparaît au bout de 2 secondes
}, 2000);


//Promise ===> les promesses
// fetch("mon lien ")
// .then((res) => res) //...........



//async/await dans la déclaration de la fonction attention je déclare la fonction comme une fonction asynchrone partout ou il y aura await tu attendras que sa se produise

async function fetchData() {
  await fetch("monlien")
//attend que le await soit exécuté avant de faire la suite
   executeFonction();
}
 //en mode asynchrone pour que la fonction fonctionnne il faut mettre async devant le =  avec le paramétre comme l'exemple de dessous

 const fetchData2 = async () =>{
   await fetch("monlien")
   //attend que le await soit exécuté avant de faire la suite
      executeFonction();
 }

 // ================================================================================================================================================================================================================================================================================
 //                L      EEEEE         JJJ   SSS    OOO   N   N
 //      /      /  L      E              J   S      O   O  NN  N
 //     /      /   L      EEE            J    SSS   O   O  N N N
 //    /      /    L      E              J       S  O   O  N  NN
 //   /      /     L      E           J  J       S  O   O  N   N
 //  /      /      LLLLL  EEEEE        JJ    SSSS    OOO   N   N
 // ================================================================================================================================================================================================================================================================================
 // * * * //LE JSON est un format pour transiter des données

//Méthode.json() => cette méthode s'auto_résout en renvoyant le body de la requête au format json

//pour aller chercher un fichier .json
//il va chercher json.txt
//il exécute la response de la méthode json
// il m'affiche le dossier data.json en log
//et dans mon 2iém log il transforme les données objet  json en string chaîne de caractére

// fetch("data.json")
// .then((res) => res.json())//cette méthode permet de résoudre le body
// .then((data) => {
// console.log(data);
// console.log((JSON.stringify(data)));JSON.stringify covertit en JSON d'aprés le prof
// });


fetch("data.json")
.then((res) => res.json())
.then((data) => {
   //stringify => convertit en JSON
   let settings = JSON.stringify(data);
   //la méthode Parse => transforme json en objet javascript
   //console.log(JSON.parse(settings));
 });


 //----------------------------------------------
 // ========================================================================================================================================================================================================================================================================================================
 //                L      EEEEE   SSS        W   W  EEEEE  BBB           A    PPPP   III
 //      /      /  L      E      S           W   W  E      B  B         A A   P   P   I
 //     /      /   L      EEE     SSS        W   W  EEE    BBBB        A   A  P   P   I
 //    /      /    L      E          S       W W W  E      B   B       AAAAA  PPPP    I
 //   /      /     L      E          S       W W W  E      B   B       A   A  P       I
 //  /      /      LLLLL  EEEEE  SSSS         W W   EEEEE  BBBB        A   A  P      III
 // ========================================================================================================================================================================================================================================================================================================
 // * * * //Les Web API
//Ce sont des API que l'on a de base dans javascript ce sont les API du navigateur qui sont (canvas,location,history,local storage  client storage)

//CLIENT STORAGE à l'intérieur on a le LOCAL STORAGE

//La capacité de stockage storage est plus importante que celle des cookies

//cookie stoctk 4 Ko

//local storage stoctk 10 Mo les données ne transite pas avec la personne qui a fait le site

//local storage est un objet de windows

localStorage.monCoffre = "Je stock la data";

//je vais recupérer la data pour l'afficher dans ma console

//console.log(localStorage.monCoffre);
document.body.textContent = localStorage.monCoffre;


//pour supprimmer l'élément dans le local storage
localStorage.removeItem("monCoffre");

//LES API 2H12m
//mettre à jour un local storage
localStorage.mettreAJour = "Denis";

//par contre on ne peux passer un objet un tableau dans le local storage par contre on peut utilser une méthode pour mettre en chaîne de caractére pour pouvoir faire passer mon objet


const unObjet = {
   name:"David",
   age: 22,
};
//une fois convertit je le récupére pour l'interpréter en JSON
localStorage.autreUsager = JSON.stringify(unObjet);


console.log(localStorage.autreUsager);//{"name":"David","age":22}

//un fois récupéré et convertit en javascript
//console.log(JSON.parse(localStorage.autreUsager));//{name: 'David', age: 22}


//SESSION STORAGE c'est comme le local storage joue sur la durée de stockage uniquement quand on est sur la page des que la ^page est fermée les donnée sont perdues

sessionStorage.reglageDonee = "55px";
//console.log(sessionStorage.reglageDonee);//et aprés si je veux je peux aussi le stocker dans un variable l'afficher à l'écran

//pour ce le supprimer

sessionStorage.clear();




//les COOKIES
// C'est quelque chose qui est envoyé d'un serveur vers un navigateur,ensuite le cookies il est stocké par le navigateur
//je vais m'ajouter un cookies
document.cookie = "username=Florian";

//une bonne patrique à faire sur le cookie lesson las API 2h22

document.cookie = "pseudo=FS;patch=/; max-age=450000; secure; samesite";

document.cookie = "pseudo=FS;patch=/; expire=Thu,31 Dec 2099 23:59:59 GMT; secure; samesite";
                  

