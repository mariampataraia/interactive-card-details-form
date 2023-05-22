const creditCardInput = document.getElementById('cardNumber');
const displayDiv = document.getElementById('displayDiv');

const nameInput = document.getElementById('name');
const displayname = document.getElementById('displayName');

const monthInput = document.getElementById('monthNumber');
const displayMonth = document.getElementById('displayMonth');

const yearInput = document.getElementById('yearNumber');
const displayYear = document.getElementById('displayYear');

const inputCvc = document.getElementById('inputCvc');
const displayCvc = document.getElementById('displayCvc');

// const nameInput = document.getElementById('name');
// const displayname = document.getElementById('displayName');



creditCardInput.addEventListener('input', function (event) {
    let input = event.target.value.replace(/\s/g, ''); // Remove existing spaces
    input = input.replace(/(\d{4})(?=\d)/g, '$1 '); // Add spaces after every 4 digits
    event.target.value = input;
});

creditCardInput.addEventListener('input', function (event) {
    const input = event.target;
    let trimmedValue = input.value.replace(/\s+/g, '').substring(0, 16);
    let formattedValue = '';

    for (let i = 0; i < trimmedValue.length; i++) {
        formattedValue += trimmedValue.charAt(i);
        if ((i + 1) % 4 === 0 && i !== 15) {
            formattedValue += ' ';
        }
    }
    displayDiv.textContent = formattedValue;
});


nameInput.addEventListener('input', () => {
    displayname.innerHTML = nameInput.value.toUpperCase();
})

monthInput.addEventListener('input', () => {
    displayMonth.innerHTML = monthInput.value.toUpperCase();
})
yearInput.addEventListener('input', () => {
    displayYear.innerHTML = yearInput.value.toUpperCase();
})

inputCvc.addEventListener('input', () => {
    displayCvc.innerHTML = inputCvc.value.toUpperCase();
})


