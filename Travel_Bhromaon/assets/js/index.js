let burger = document.getElementsByClassName('nav-burger')[0];
let header = document.getElementsByClassName('nav-list')[0];
let main = document.getElementsByClassName('main')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('nav-burger__active')
    header.classList.toggle('nav-list__active')
    main.classList.toggle('main__active')
}, false);