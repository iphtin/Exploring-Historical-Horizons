const nav = document.querySelector('nav');
const icon = document.getElementById('icon');

// <i class="fa-solid fa-x"></i>
// <i class="fa-solid fa-xmark"></i>

function closeFun() {
    nav.style.left = "-400px";
}

function openFun () {
    nav.style.left = "0px";
}