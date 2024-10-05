let send = document.querySelector(".send")
let hide = document.querySelector('#navbarNavDropdown');
let close = document.querySelector(".dropdown-menu ")


function myFunction(){
  send.style.display = "block"
}

function demo(){
  send.style.display = "none"
}


const toggleButton = document.querySelector('.switch');

// hide.style.display = "block";

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function click(){
  close.style.display = "none"
}

let menu = document.querySelector(".dropdown-menu")
function myFunction2(){
  menu.style.display = "block"
}


