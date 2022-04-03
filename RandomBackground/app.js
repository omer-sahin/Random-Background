const body = document.querySelector('body');
const button = document.querySelector('button');


const colorOne = '#fff';
const colorTwo = '#f4f4g3';

button.addEventListener('click', changeBackground);


function changeBackground() {
    // //! rastgele bir renk seçimi
    const x = Math.floor(Math.random() * 1000000);


    body.style.backgroundColor = `#${x}`


}