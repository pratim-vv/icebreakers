// Array of icebreakers
const icebreakers = [
    "How many times did you fall down when it was really icy? Where? Are you okay?",
    "What are your academic goals? Career goals?",
    "How do you like your potatoes? Baked? Mashed? Fried? Why?",
    "Opinions on Chancellor Jones?",
    "Most illegal thing you have done?",
    "Do you like campus or your hometown more?",
    "Where is your family from?",
    "One thing you love or hate about your roommates?",
    "Would you rather play a hero or a villain?"
];

// Function to generate a random icebreaker
function generateIcebreaker() {
    const icebreakerElement = document.getElementById("icebreaker");
    const randomIndex = Math.floor(Math.random() * icebreakers.length);
    icebreakerElement.textContent = icebreakers[randomIndex];
}

// Initial icebreaker generation
generateIcebreaker();
