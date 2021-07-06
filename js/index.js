// Your code goes here
const buttonList = document.querySelectorAll('.destination .btn');
const imgList = document.querySelectorAll('img');
const h4Tags = document.querySelectorAll('h4');


function signUp() {
    window.prompt('Would you like to sign up?');
}

for(let i = 0; i < buttonList.length; i++) { // 1. on click
    buttonList[i].addEventListener('click', signUp);
}

function keyPress(event) { // 2. on key press
    if(event.key === 'Enter') {
        window.alert('Enter was pressed');
    }
}

document.addEventListener('keyup', keyPress);

function dblClickHandler() { //3. on double click
    window.alert('bus was double clicked!');
}

imgList[0].addEventListener('dblclick', dblClickHandler);

function mouseOverHandler(e) { // 4. on mouse over
    e.target.classList.add('bold');
}

for(let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].addEventListener('mouseover', mouseOverHandler);
}

function mouseLeaveHandler(e) { // 5. on mouse leave
    e.target.classList.remove('bold');
}

for(let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].addEventListener('mouseleave', mouseLeaveHandler);
}

