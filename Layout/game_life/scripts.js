function fillActivePoints(w, width, h, height) {
    if (w === Math.round(width / 2) && h >= Math.round(height / 2) - 4 && h <= Math.round(height / 2) + 4) {
        el_h.classList.add('active');
    }
}

function createSheet(width, height, parent) {
    let startText = document.createElement('p');
    startText.innerText = 'Игра "Жизнь"';
    parent.appendChild(startText);
    let playButton = document.createElement('div');
    playButton.innerText = 'PLAY';
    playButton.classList.add('button');
    playButton.classList.add('play-button');
    parent.appendChild(playButton);
    for (let w = 1; w <= width; w++) {
        let el_w = document.createElement('div');
        el_w.classList.add('row-el');
        for (let h = 1; h <= height; h++) {
            let el_h = document.createElement('div');
            el_h.classList.add('row-' + w);
            el_h.classList.add('col-' + h);
            el_h.classList.add('cell');
            /*if (w === Math.round(width/2) && h >= Math.round(height/2)-4 && h <= Math.round(height/2)+4 ){
                el_h.classList.add('active');
            }*/
            el_w.appendChild(el_h);
        }
        parent.appendChild(el_w);
    }

    let resetButton = document.createElement('div');
    resetButton.innerText = 'RESET';
    resetButton.classList.add('button');
    resetButton.classList.add('reset-button');
    resetButton.style.display = 'none';
    parent.appendChild(resetButton);

    let score = document.createElement('p');
    score.classList.add('phase');
    score.innerText = 'Эпоха: 1';
    parent.appendChild(score);
}

function isAlive(parentSheet, refilCells) {
    let elements = parentSheet.querySelectorAll('.cell');
    elements.forEach(function (el) {
        let row = parseInt(el.classList[0].match(/\d+/)[0]);
        let col = parseInt(el.classList[1].match(/\d+/)[0]);
        let r = 0;
        let c = 0;
        let counter = 0;
        for (r = row - 1; r <= row + 1; r++) {
            for (c = col - 1; c <= col + 1; c++) {
                let element = document.querySelector('.row-' + r + '.col-' + c);
                if (element !== null) {
                    if (r !== row || c !== col) {
                        if (element.classList.length > 3) {
                            counter++;
                        }
                    }
                }
            }
        }
        if (counter < 2 || counter > 3) {
            refilCells.push({
                r: row,
                c: col,
                fill: false,
            });
        } else if (counter === 3) {
            refilCells.push({
                r: row,
                c: col,
                fill: true,
            });
        }
        counter = 0
    });
}

window.onload = function () {
    let y = 21,
        x = 21,
        epo = 1,
        parentSheet = document.querySelector('.sheet');
    createSheet(x, y, parentSheet);
    let elements = parentSheet.querySelectorAll('.cell'),
        startButton = parentSheet.querySelector('.play-button'),
        resetButton = parentSheet.querySelector('.reset-button');
    elements.forEach(function (el) {
        el.addEventListener('click', function () {
            if (el.classList.length > 3) {
                el.classList.remove('active');
            } else {
                el.classList.add('active');
            }
        })
    });
    startButton.addEventListener('click', function () {
        resetButton.style.display = 'block';

        intervalRefreshCells = setInterval(function () {
            let refillCells = [];
            epo++;
            let phase = document.querySelector('.phase');
            phase.innerText = 'Эпоха: ' + epo;
            parentSheet = document.querySelector('.sheet');
            isAlive(parentSheet, refillCells);
            refillCells.forEach(function (cell) {
                let element = document.querySelector('.row-' + cell.r + '.col-' + cell.c);
                if (cell.fill === true) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        }, 1000);
        startButton.style.display = 'none';
    });
    resetButton.addEventListener('click', function () {
        let phase = document.querySelector('.phase');
        epo = 0;
        startButton.style.display = 'block';
        phase.innerText = 'Эпоха: 1';
        clearTimeout(intervalRefreshCells);
        let elements = parentSheet.querySelectorAll('.cell');
        elements.forEach(function (el) {
            if (el.classList.length > 3) {
                el.classList.remove('active');
            }
        });
        resetButton.style.display = 'none';
    });


};