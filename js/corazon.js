/*document.addEventListener('DOMContentLoaded', function () {
    const heartIcon = document.getElementById('icon');
    const heartIcon2 = document.getElementById('icon1');
    const heartIcon3 = document.getElementById('icon2');
    const heartIcon4 = document.getElementById('icon3');

    if (heartIcon) {
        heartIcon.addEventListener('click', function () {
            heartIcon.classList.toggle('active');
            
            // Cambiar el color directamente con JavaScript
            if (heartIcon.classList.contains('active')) {
                heartIcon.style.color = 'red';
            } else {
                heartIcon.style.color = 'grey';  // O el color que desees cuando no esté activo
            }
        });
    }

    if (heartIcon2) {
        heartIcon2.addEventListener('click', function () {
            heartIcon2.classList.toggle('active');
            
            // Cambiar el color directamente con JavaScript
            if (heartIcon2.classList.contains('active')) {
                heartIcon2.style.color = 'red';
            } else {
                heartIcon2.style.color = 'grey';  // O el color que desees cuando no esté activo
            }
        });
    }

    
    if (heartIcon3) {
        heartIcon3.addEventListener('click', function () {
            heartIcon3.classList.toggle('active');
            
            // Cambiar el color directamente con JavaScript
            if (heartIcon3.classList.contains('active')) {
                heartIcon3.style.color = 'red';
            } else {
                heartIcon3.style.color = 'grey';  // O el color que desees cuando no esté activo
            }
        });
    }

    if (heartIcon4) {
        heartIcon4.addEventListener('click', function () {
            heartIcon4.classList.toggle('active');
            
            // Cambiar el color directamente con JavaScript
            if (heartIcon4.classList.contains('active')) {
                heartIcon4.style.color = 'red';
            } else {
                heartIcon4.style.color = 'grey';  // O el color que desees cuando no esté activo
            }
        });
    }
});

var btn = document.getElementById("icon");

function likeBtn(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    if (btn.classList.contains("heart")) {
        btn.classList.remove("heart");
    } else {
        btn.classList.add("heart");
    }
}

// Agregar un event listener al elemento
btn.addEventListener("click", likeBtn);*/

document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = [
        document.getElementById('icon'),
        document.getElementById('icon1'),
        document.getElementById('icon2'),
        document.getElementById('icon3'),
        document.getElementById('icon4'),
        document.getElementById('icon5')
    ];

    heartIcons.forEach(function (heartIcon) {
        if (heartIcon) {
            heartIcon.addEventListener('click', function (event) {
                event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
                heartIcon.classList.toggle('active');

                // Cambiar el color directamente con JavaScript
                if (heartIcon.classList.contains('active')) {
                    heartIcon.style.color = 'red';
                } else {
                    heartIcon.style.color = 'grey';  // O el color que desees cuando no esté activo
                }
            });
        }
    });
});

