const textElement = document.getElementById("text");
const texts = ["Web Developer", "UI/UX Designer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[index];
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex--);
  } else {
    textElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 700); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length; 
  }

  
  setTimeout(type, isDeleting ? 50 : 150); 
}


function addCursor() {
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  textElement.appendChild(cursor);
}

window.onload = () => {
  addCursor();
  type();
};

  



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


AOS.init({
    duration: 1500, 
    once: true, 
});