// script.js

// Animate input placeholder text
const placeholderTexts = [
    "Search for biryani...",
    "Hungry? Try pizza...",
    "Craving sushi?",
    "Find your favorite dishes..."
];

const searchInput = document.querySelector('main input[type="text"]');
let index = 0;

function cyclePlaceholder() {
    searchInput.setAttribute("placeholder", placeholderTexts[index]);
    index = (index + 1) % placeholderTexts.length;
}

setInterval(cyclePlaceholder, 3000);

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 0, 0, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
    }
});
