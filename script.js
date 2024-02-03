// Array of icebreakers
const icebreakers = [
    "How many times did you fall down when it was really icy? Where? Are you okay?",
    "What are your academic goals? Career goals?",
    "How do you like your potatoes? Baked? Mashed? Fried? Why?",
    "Opinions on Chancellor Jones?",
    "Most illegal thing you have done?",
    "Do you like campus or your hometown more? Explicame",
    "Are you German? Ethiopian? What are you?",
    "Have you ever been out of country?",
    "Do you need the max wins?"
];

// Function to generate a random icebreaker
function generateIcebreaker() {
    const icebreakerElement = document.getElementById("icebreaker");
    const randomIndex = Math.floor(Math.random() * icebreakers.length);
    icebreakerElement.textContent = icebreakers[randomIndex];
}

// Initial icebreaker generation
generateIcebreaker();
