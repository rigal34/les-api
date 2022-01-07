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

req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();


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
fetch("mon lien")

