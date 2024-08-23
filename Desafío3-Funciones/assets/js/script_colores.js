const divs = document.querySelectorAll('.color-box');

divs.forEach(div => {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});

let color;

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } else if (event.key === 'q') {
        createDiv('purple');
    } else if (event.key === 'w') {
        createDiv('grey');
    } else if (event.key === 'e') {
        createDiv('brown');
    }

    const keyDiv = document.getElementById('key');
    if (keyDiv) {
        keyDiv.style.backgroundColor = color;
        keyDiv.style.marginTop = '0'; 
    }
});

function createDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color-box';
    newDiv.style.backgroundColor = color;
    document.getElementById('container').appendChild(newDiv);
}
