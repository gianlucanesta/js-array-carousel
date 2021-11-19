// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra 
// e nel suo angolo in basso a destra dovranno comparire relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Seleziono il container delle immagini grandi
const bigImgContainer = document.querySelector('.big-img-container');

// Seleziono il container delle immagini piccole
const smallImgContainer = document.querySelector('.thumbnails');


// Imposto un ciclo FOR
for(let i = 0; i < items.length; i++){
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    //console.log(thisPath);

    const newImgDiv = `
    <div class="single-img"> 
        <!-- Single Image -->
        <img src="${thisPath}" alt="Image ${i + 1}">

        <!-- Single Text -->
        <div class="single-img-txt">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>
    </div>
    `;
    bigImgContainer.innerHTML += newImgDiv;
    
    
    const singleThumbnail = `

        <!-- Single Thumbnail -->
        <div class="single-thumbnail">
            <img src="${thisPath}" alt="Thumbnail ${i + 1}">
        </div>
    `;

    smallImgContainer.innerHTML += singleThumbnail;
}

// Definisco una variabile per selezionare un elemento di default
let activeImage = 0;

// Seleziono la classe delle immagini singole grandi
const allImages = document.getElementsByClassName('single-img');

// Seleziono la classe delle immagini singole piccole
const allThumbnails = document.getElementsByClassName('single-thumbnail');

// console.log(allImages);
// console.log(allThumbnails);

//  Attribuisco la classe Active ad un elemento
allImages[activeImage].classList.add('active');
allThumbnails[activeImage].classList.add('active');


const prevChevron = document.querySelector('.up-prev');
prevChevron.addEventListener('click', function() {
    //alert('test');

    // Rimuovo la classe active dall'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumbnails[activeImage].classList.remove('active');

    // Decremento
    activeImage--;

    // Aggiungo la classe active dall'immagine corrente
    allImages[activeImage].classList.add('active');
    allThumbnails[activeImage].classList.add('active');
});



const nextChevron = document.querySelector('.down-next');
nextChevron.addEventListener('click', function() {
    //alert('test');

    // Rimuovo la classe active dall'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumbnails[activeImage].classList.remove('active');

    // Incremento
    activeImage++;
    
    // Aggiungo la classe active dall'immagine corrente
    allImages[activeImage].classList.add('active');
    allThumbnails[activeImage].classList.add('active');
});