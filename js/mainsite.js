const burger= document.querySelector('.burger');
const nav = document.querySelector('.navLinks');



function toggleMenu() {

    nav.classList.toggle('navActive');

    burger.classList.toggle('toggle');

    document.querySelector('.box').classList.toggle('boxActive');

    document.querySelector('.shadow').classList.toggle('shadowActive');

}

document.querySelector('.burger').addEventListener('click', toggleMenu)

document.querySelector('.shadow').addEventListener('click', toggleMenu)