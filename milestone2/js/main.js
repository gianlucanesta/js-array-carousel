// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle immagini dinamicamente servendoci dell'array 
// fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, 
// ma costruito dinamicamente attraverso JavaScript.


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

// Imposto un ciclo FOR
for(let i = 0; i < items.length; i++){
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    console.log(thisPath);

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
    

}