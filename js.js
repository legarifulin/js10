let radioEl = document.getElementsByClassName('radio')
let maleEl = document.getElementsByClassName('male');
let femaleEl = document.getElementsByClassName('female')
let otherEl = document.getElementsByClassName('other')
let singleEl = document.getElementsByClassName('singler')
let marriedEl = document.getElementsByClassName('married')
let widowedEl = document.getElementsByClassName('widowed')
let nameEl = document.getElementsByClassName('name')
let lnameEl = document.getElementsByClassName('lname')
let citiesEl = document.getElementsByClassName('cities')
let aboutEl = document.getElementsByClassName('about')
let fnameEl = document.getElementsByClassName('fname')
let goButtonEl = document.getElementById('goButton')
let goButton1El = document.getElementById('goButton1')
let imgEl = document.getElementById('changeImg')

console.log(fnameEl);
setTimeout(function () {
    // maleEl[0].innerHTML = maleEl[0].innerHTML + '*';
    // femaleEl[0].innerHTML = femaleEl[0].innerHTML + '*';
    // otherEl[0].innerHTML = otherEl[0].innerHTML + '*';


}, 1000);


goButtonEl.addEventListener('click', function () {
    imgEl.src = 'https://randomwordgenerator.com/img/picture-generator/nature-2609978_640.jpg'
});
goButton1El.addEventListener('click', function () {
    imgEl.src = 'https://placehold.it/300x240'
});

