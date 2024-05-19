const imgs = document.getElementById('carrosel-imagem');
const photo = document.querySelectorAll('#carrosel-imagem img');

let idx = 0;

function carrosel() {
    idx++;

    if (idx > photo.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 350}px)`;
}

setInterval(carrosel, 3000);