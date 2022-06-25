const input = document.querySelector('input');
const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');

const timeout = 1000;

function onBtnClick(e) {
    console.log(e, "button is clicked");
    showToast();
}

function onInputChange(e) {
    paragraph.textContent = e.target.value;
}

button.addEventListener("click", throttleFunction(onBtnClick, timeout));
input.addEventListener("input", debounceFunction(onInputChange, timeout));