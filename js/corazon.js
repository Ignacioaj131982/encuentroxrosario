document.addEventListener('DOMContentLoaded', function () {
    const heartIcon = document.getElementById('icon');

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
btn.addEventListener("click", likeBtn);
