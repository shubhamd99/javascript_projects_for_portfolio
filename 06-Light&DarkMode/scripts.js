const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle Styles
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    if (isDark) {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        imageMode('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        imageMode('light');
        localStorage.setItem('theme', 'light');
    }
}

// Switch Theme Dynamically
// The setAttribute() method sets a new value to an attribute.
// If the attribute does not exist, it is created first.
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
(function getDefaultTheme() {
    const currentTheme = localStorage.getItem('theme');
    console.log('currentTheme', currentTheme);
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            toggleDarkLightMode(true);
        } else {
            toggleSwitch.checked = false;
            toggleDarkLightMode(false);
        }
    }
})()