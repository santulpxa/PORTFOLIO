// ************************HOME PAGE(STARTING)*********************
// javascript for sidebar slider (start)*******

let sidebar = document.querySelector(".side-bar");
let menu = document.querySelector(".menu1");
let cross = document.querySelector(".cross");

menu.onclick = function () {
    sidebar.classList.remove("notactive");
    sidebar.classList.toggle("active");
}

cross.onclick = function () {
    sidebar.classList.remove("active");
    sidebar.classList.add("notactive");
}

// javascript for sidebar slider (end)*******

// *******Typing effects(start)*********

var typed = new Typed('.typing', {
    strings: ["Front End Developer", "Full Stack Developer", "Back End Developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

// *******Typing effects(end)*********


// ************************HOME PAGE(End)*********************

