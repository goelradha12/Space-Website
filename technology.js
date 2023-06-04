"use strict"


// sabse pahle ham document se buttons le lete hn
const choices = document.querySelectorAll('.tech-choice');


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
            showdata(data.technology[value]);
        });
}

function showdata(val)
{
    document.querySelector('.technology-image source').srcset = val.images.portrait;
    document.querySelector('.technology-image img').src = val.images.landscape;
    document.getElementById('name').innerText = val.name;
    document.getElementById('description').innerText = val.description;
}
