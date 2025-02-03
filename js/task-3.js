const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const inputElement = nameInput.value.trim();

    if (inputElement === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputElement;
    }
})