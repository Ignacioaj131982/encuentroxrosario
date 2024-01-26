console.log("Inicio de script.js");


function activarAnimacion() {
    var elemento1 = document.querySelector('.encontrarnos');
    var elemento2 = document.querySelector('.barrioxbarrio')
    elemento1.classList.toggle('animado');
    elemento2.classList.toggle('animado');
}

const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entradas, observador) =>  {
    //console.log(entradas)
    //console.log(observador);
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');

        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px', //'0px 0px 0px 0px' si queres que se active la funcion con otro margen que no sea el de la pantalla
    threshold: 1.0 //quiero que ejecute el codigo cuando la imagen esta completa en el viewport
});

observador.observe(imagen1);
observador.observe(imagen2);

/*const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

}

list.forEach((item) =>
item.addEventListener('click', activeLink));





// Seleccionar todos los elementos con la clase 'abrirIcono'
const iconos = document.querySelectorAll('.abrirIcono');

// Agregar un evento de clic a cada icono
iconos.forEach((icono) => {
    icono.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        const texto = icono.nextElementSibling.querySelector('.link_text').textContent;
        console.log("Se hizo clic en el ícono:", texto);
        // Aquí puedes realizar las acciones deseadas para cada ícono
    });
});*/

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// Seleccionar todos los elementos con la clase 'abrirIcono'
const iconos = document.querySelectorAll('.abrirIcono');

// Agregar un evento de clic a cada icono
iconos.forEach((icono) => {
    icono.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Verificar si se hizo clic en el icono Home
        if (icono.querySelector('.bx-home')) {
            list.forEach((item) => item.classList.remove('active')); // Remover 'active' de todos los elementos de lista
            icono.closest('.list').classList.add('active'); // Agregar 'active' al elemento padre del icono Home
        }

        const texto = icono.nextElementSibling.querySelector('.link_text').textContent;
        console.log("Se hizo clic en el ícono:", texto);
        // Aquí puedes realizar las acciones deseadas para cada ícono
    });
});




/*const territorioLink = document.querySelector('.link_text');
const menuVertical = document.querySelector('.menu_vertical');

territorioLink.addEventListener('click', function (event) {
    event.preventDefault();
    menuVertical.classList.toggle('active');
    console.log('Toggle class "active"');
});*/


const territorioLink = document.querySelector('.link_text');
const menuVertical = document.querySelector('.menu_vertical');

territorioLink.addEventListener('click', function (event) {
    event.preventDefault();
    menuVertical.classList.toggle('active');
    console.log('Toggle class "active"');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    const isTerritorioLink = event.target === territorioLink || territorioLink.contains(event.target);
    const isMenuVertical = event.target === menuVertical || menuVertical.contains(event.target);

    if (!isTerritorioLink && !isMenuVertical) {
        menuVertical.classList.remove('active');
        console.log('Close menu');
    }
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace("active", "" );
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
*/


var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



function currentSlides(n) {
    slideIndex = n;
    showSlides(slideIndex);
}
console.log("Después de una sección importante");

window.onscroll = function() {
    console.log("Se activó el evento de desplazamiento");
    if(document.documentElement.scrollTop > 100) {
        console.log("Se cumple la condición scrollTop > 100");
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        console.log("No se cumple la condición scrollTop > 100");
        document.querySelector('.go-top-container').classList.remove('show');


    }
}

document.querySelector('.go-top-container').addEventListener('click',  () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    });
});


let items = document.querySelectorAll('.slider_productivo .list .item');  
let next = document.getElementById('next_productivo');  
let prev = document.getElementById('prev_productivo');
let thumbnails = document.querySelectorAll('.thumbnail_productivo .item');

//config param
let countItem = items.length;
let itemActive = 0;
//event click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider(); 
}

//event prev click
prev.onclick = function() {
    itemActive = itemActive -1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);


function showSlider() {
    //remove item active old
    let itemActiveOld = document.querySelector('.slider_productivo .list .item.active')
    let thumbnailActiveOld = document.querySelector('.thumbnail_productivo .item.active')
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear new item run slider
    clearInterval(refreshInterval);
    let refreshInterval = setInterval(() => {
        next.click();
    }, 3000);


}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', ()=>{
        itemActive = index;
        showSlider();
    })
})


console.log("Fin de script.js");
