const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const main_class = document.querySelectorAll(".alternate-style");

color1.addEventListener('click',()=>{
    changeColor("color1");
});
color2.addEventListener('click',()=>{
    changeColor("color2");
});
color3.addEventListener('click',()=>{
    changeColor("color3");
});

function changeColor(color) {
    main_class.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

    // Save the selected color to localStorage
    localStorage.setItem('selected-color', color);
}

// Function to apply the saved color
function applySavedColor() {
    const savedColor = localStorage.getItem('selected-color');
    if (savedColor) {
        changeColor(savedColor);
    }
}

// Apply saved color on page load
applySavedColor();

