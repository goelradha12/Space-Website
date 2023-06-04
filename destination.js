"use strict"


// sabse pahle ham document se buttons le lete hn
const choices = document.querySelectorAll('.destination-choice');
const area = document.querySelector('.destination-info');


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
            showdata(data.destinations[value]);
        });
}

function showdata(val)
{
    document.querySelector('.destination-image source').srcset = val.images.webp;
    document.querySelector('.destination-image img').src = val.images.png;
    document.getElementById('name').innerText = val.name;
    document.getElementById('description').innerText = val.description;
    document.getElementById('distance').innerText = val.distance;
    document.getElementById('travel').innerText = val.travel;
}
