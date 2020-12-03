let inputs = document.querySelectorAll('.editor-panel input');

/* 'this.name' refers to the input's name atribute, which has been intentionally called after the css variables that we want to modify. */
function triggerClick() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
}
inputs.forEach(input => input.addEventListener('change', triggerClick));