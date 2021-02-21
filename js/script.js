const images = document.querySelectorAll('.video');
const containerimage = document.querySelector('.container-img');
const imagecontainer = document.querySelector('.img-show');
const scrollabout1 = document.getElementById("img1");
const scrollabout2 = document.getElementById("img2");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");
const info6 = document.getElementById("info6");
images.forEach(image => {
    image.addEventListener('click', () => {
        addimage("https://www.youtube.com/watch?v=dXl2exeH8tI");

    })
})

const addimage = (src) => {
    containerimage.classList.toggle('move');
    imagecontainer.classList.toggle('show');
    imagecontainer.src = src;
}

containerimage.addEventListener('click', () => {
    containerimage.classList.toggle('move');
    imagecontainer.classList.toggle('show');
})

window.onscroll = () => { efectosscroll() };

function efectosscroll() {
    if (window.scrollY > 500) {
        scrollabout1.classList.add('apareced');

    }
    if (window.scrollY > 800) {
        scrollabout2.classList.add('aparecei');

    }

    if (window.scrollY > 1200) {
        info1.classList.add('aparece');
        info2.classList.add('aparece2');
        info3.classList.add('aparece3');
        info4.classList.add('aparece4');
        info5.classList.add('aparece5');
        info6.classList.add('aparece6');
    }
    console.log(window.scrollY);
}