function slideArrows(n) {
    currSlide = currSlide + n;

    if (currSlide > 3) {
        currSlide = 1;
    } else if (currSlide < 1) {
        currSlide = 3;
    }

    imgConainer.style.background = "url('" + slides[currSlide - 1].src + "')";
    imgConainer.style.backgroundSize = "cover";

    imgTitle.innerHTML = slides[currSlide - 1].title;
    imgDescription.innerHTML = slides[currSlide - 1].description;
}

function slideByDots(dot) {
    let dotNumber = +(dot.classList[0].match(/\d+/)[0]);
    currSlide = dotNumber;

    imgConainer.style.background = "url('" + slides[currSlide - 1].src + "')";
    imgConainer.style.backgroundSize = "cover";

    imgTitle.innerHTML = slides[currSlide - 1].title;
    imgDescription.innerHTML = slides[currSlide - 1].description;
}

function changeActiveDot() {
    dotteds.forEach(function (el) {
        el.classList.remove('active');
    });

    dotteds[currSlide - 1].classList.add('active');
}

function init() {
    currSlide = 1;
    imgConainer = document.querySelector('.image');
    imgTitle = document.querySelector('.title-image-text');
    imgDescription = document.querySelector('.desc-image-text');

    let arrowLeft = document.querySelector('.arrow-left');
    let arrowRight = document.querySelector('.arrow-right');

    dotteds = document.querySelectorAll('.dot-img');

    slides = [
        {
            src: 'img/slides/london.jpg',
            title: 'London',
            description: 'Is the capital of Britain.'
        },
        {
            src: 'img/slides/new-york.jpg',
            title: 'New-York',
            description: 'Здесь есть статуя свободы, красивая.'
        },
        {
            src: 'img/slides/vince.jpg',
            title: 'Vince',
            description: 'Воды больше чем суши.'
        }
    ];

    imgConainer.style.background = "url('" + slides[currSlide - 1].src + "')";
    imgConainer.style.backgroundSize = "cover";

    imgTitle.innerHTML = slides[currSlide - 1].title;
    imgDescription.innerHTML = slides[currSlide - 1].description;


    arrowLeft.addEventListener('click', function () {
        slideArrows(-1);
        changeActiveDot();
    });

    arrowRight.addEventListener('click', function () {
        slideArrows(1);
        changeActiveDot();
    });

    dotteds.forEach(function (dot) {
        dot.addEventListener('click', function () {
            slideByDots(dot);
            changeActiveDot();
        });
    });
}

window.onload = init;