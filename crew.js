"use strict"


// sabse pahle ham document se buttons le lete hn
const choices = document.querySelectorAll('.crew-choice');


choices.forEach(choice => {
    choice.onclick = () => {
        document.querySelector('[aria-selected="true"]').setAttribute("aria-selected",false);
        choice.setAttribute("aria-selected",true);
        getdata(choice.value);
    }
})


function getdata(value) {
    fetch('./data.json')
        .then(data => data.json())
        .then(data => {
            showdata(data.crew[value]);
        });
}

function showdata(val)
{
    document.querySelector('.crew-image source').srcset = val.images.webp;
    document.querySelector('.crew-image img').src = val.images.png;
    document.querySelector('.crew-details div h2').innerText = val.name;
    document.querySelector('.crew-details div p').innerText = val.role;
    document.querySelector('.crew-details .bio').innerText = val.bio;
}
