// VARIABLE DECLARATION

const container = document.querySelector('.container');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const services = document.querySelector('.service');
const contact = document.querySelector('.contact');
const hm = document.querySelector('#home');
const abt = document.querySelector('#about');
const srv = document.querySelector('#service');
const cnt = document.querySelector('#contact');

//EVENTS

container.classList.remove('show-nav');
open.addEventListener('click', () =>{
       container.classList.add('show-nav');
});

close.addEventListener('click', () =>{
       container.classList.remove('show-nav');
});

home.addEventListener('click',() =>{
       container.classList.remove('show-nav');
});
about.addEventListener('click',() =>{
       container.classList.remove('show-nav');
});
services.addEventListener('click',() =>{
       container.classList.remove('show-nav');
});
contact.addEventListener('click',() =>{
       container.classList.remove('show-nav');
});