const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Ain't no way???",
    "You're being hysterical!",
    "Do you want to be sent to an asylum?",
    "Why are you being so cold?",
    "Bro please?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "I will sell Dribsis!",
    "I'm going to tell your mum",
    "Please give me a chance!",
    "Last chance!",
    "Ok, Lets just start over.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/dribsis.JPG";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // Change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./public/images/yes.gif"; // Changed path
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
    // Show choose idea date section
    let ideaDateSection = document.querySelector('.choose-idea-date');
    ideaDateSection.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

document.getElementById('chinese-button').addEventListener('click', () => {
    // Display Chinese food choice
    displayFoodChoice("Chinese - Oh the classic! Nice choice, pookie. We could always go to our first date spot or maybe the Golden Phoenix");
});

document.getElementById('sushi-button').addEventListener('click', () => {
    // Display Sushi food choice
    displayFoodChoice("Japanese - Maybe Eat Tokyo");
});

document.getElementById('korean-button').addEventListener('click', () => {
    // Display Korean food choice
    displayFoodChoice("Korean - There's places like Assa, and others we can search up");
});

document.getElementById('italian-button').addEventListener('click', () => {
    // Display Italian food choice
    displayFoodChoice("Italian - Lina Stores, Flower and Grape, or somewhere new. We can take our pick ;) ");
});

function displayFoodChoice(food) {
    // Get the element where the food choice will be displayed
    let foodChoiceElement = document.getElementById('food-choice');

    // Update the content of the element with the chosen food
    foodChoiceElement.textContent = "We're getting " + food + "!!!"; }