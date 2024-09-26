const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const librosCont = document.querySelector('.libros-cont');

// Mover hacia la izquierda
leftArrow.addEventListener('click', () => {
    librosCont.scrollBy({
        left: -200, // Ajusta el valor según el tamaño de cada libro
        behavior: 'smooth'
    });
});

// Mover hacia la derecha
rightArrow.addEventListener('click', () => {
    librosCont.scrollBy({
        left: 200, // Ajusta el valor según el tamaño de cada libro
        behavior: 'smooth'
    });
});
