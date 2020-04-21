// HARD: Create two buttons, one that when clicked turns the background of the body red. 
// The other, when clicked, turns the body's background color white. 
// Each of the background colors should be defined as class styles and when the buttons are pushed 
// the body's classList is updated to include the correct class for the background. 


//Target buttons that will change the bg color onClick
//Change the classlist onClick



// const red = document.getElementsByClassName('bg-red');
// const white = document.getElementsByClassName('bg-white');

let red = document.querySelector('.red-button');
let white = document.querySelector('.white-button');

document.querySelector('.red-button').addEventListener('click', function () {
    document.body.style.backgroundColor = "red";
})

document.querySelector('.white-button').addEventListener('click', function () {
    document.body.style.backgroundColor = "white";
})



window.updateTheBackground = function(className) {
   document.body.classList = className
}

window.updateTheBackground();
