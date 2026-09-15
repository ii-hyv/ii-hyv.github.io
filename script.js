let count = 0;

// 2. Select HTML elements from the DOM
const button = document.getElementById('counterBtn');
const countDisplay = document.getElementById('count');

// 3. Add an event listener to run code on click
button.addEventListener('click', () => {
    count++; // Increment count by 1
    countDisplay.textContent = count; // Update the HTML text
});