// Your code goes here
const buttonList = document.querySelectorAll('.destination .btn');
const imgList = document.querySelectorAll('img');
const h4Tags = document.querySelectorAll('h4');
const navLinks = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('.nav-container');
const backgrounds = document.querySelector('body');


function signUp(e) {
    window.prompt('Would you like to sign up?');
    console.log(`it took you ${e.timeStamp} miliseconds to click the button!`); // 2. timestamp of event
}

for(let i = 0; i < buttonList.length; i++) { // 1. on click
    buttonList[i].addEventListener('click', signUp);
}

function keyPress(event) { // 3. on key press
    if(event.key === 'Enter') {
        window.alert('Enter was pressed');
    }
}

document.addEventListener('keyup', keyPress);

function dblClickHandler() { //4. on double click
    window.alert('bus was double clicked!');
}

imgList[0].addEventListener('dblclick', dblClickHandler);

function mouseOverHandler(e) { // 5. on mouse over
    e.target.classList.add('bold');
}

for(let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].addEventListener('mouseover', mouseOverHandler);
}

function mouseLeaveHandler(e) { // 6. on mouse leave
    e.target.classList.remove('bold');
}

for(let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].addEventListener('mouseleave', mouseLeaveHandler);
}

imgList[0].addEventListener('load', onLoadHandler => {console.log('image has loaded!')}); // 7. load

window.addEventListener('resize', resizeHandler => {console.log('window has been resized!')}); //8. resize

document.addEventListener('scroll', function(event) { //9. scroll;
    setTimeout(function(){
        backgrounds.style.background = 'red';
        console.log('MEEEEEEEEEEEEEEEEEEEEEEEOW')
    }, 10000)
})

imgList[0].addEventListener('wheel', function(e) { //10. Mouse wheel event
    imgList[0].style.width = '20%';
})

// Stop page reload on link click

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
    })
}

// Stop propagation example below 

navContainer.addEventListener('mouseover', function(e) { 
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'red';
    }
});

navContainer.addEventListener('mouseout', function(e) { 
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'black';
    }
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', function(e) {
        e.target.style.color = 'red';
        e.stopPropagation();
    })
    navLinks[i].addEventListener('mouseout', function(e) {
        e.target.style.color = 'black';
        e.stopPropagation();
    })
}


