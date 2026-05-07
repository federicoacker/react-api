
const API_URLS = {
    API_MALE_ACTORS_URL: "https://lanciweb.github.io/demo/api/actors/",
    API_FEMALE_ACTORS_URL: "https://lanciweb.github.io/demo/api/actresses/"
}   

function fetchActors() {

    const maleActors = fetch(API_URLS.API_MALE_ACTORS_URL)
    .then (result => result.json());
    const femaleActors = fetch(API_URLS.API_FEMALE_ACTORS_URL)
    .then (result => result.json());

    return [maleActors, femaleActors];

}



export {
    fetchActors
}


// Idea di cosa voglio fare:
/**
 * 1 useEffect nell'app.jsx fara i 2 fetch alle due API al mount di APP.jsx.
 * 2 le 2 promise verranno messe in un array di promise.
 * 3 il faccio promise.all(arrayDiPromise)
 * 4 invoco .then sul promise.all (che è restituisce una promise)
 * 5 in questo .then dovrò fare 2 cose.
 *      i. Creare degli oggetti normalizzati che contengano i dati dell' api 
 *      (quindi avere una funzione a cui darò l'array di oggetti degli attori e li normalizza e 
 *      l'array di oggetti delle attrici e li normalizza)
 *      ii. Recuperare questi 2 array restituiti dalle 2 chiamate alla funzione di sanificazione, e mischiarli in 
 *      un'unico array con id aggiustati. Fatto questo, userò questo valore per andare a fare setActorArray che 
 *       modificherà una variabile di stato dichiarata nell'app.jsx
 * 6 Il resto è poi semplice handling di dati, prop drilling e così via.
 * 
 */