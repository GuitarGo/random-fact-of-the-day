const facts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance.'",
    "Wombat poop is cube-shaped."
];

function getStoredFact() {
    const storedFact = localStorage.getItem('fact');
    const storedDate = localStorage.getItem('date');
    const today = new Date().toLocaleDateString();

    if (storedFact && storedDate === today) {
        return storedFact;
    }

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    localStorage.setItem('fact', randomFact);
    localStorage.setItem('date', today);

    return randomFact;
}

document.getElementById('reveal-fact-button').addEventListener('click', function() {
    const fact = getStoredFact();
    document.getElementById('fact-container').innerText = fact;

    // Fireworks effect
    const container = document.body;
    const fireworks = new Fireworks(container);
    fireworks.start();
    setTimeout(() => {
        fireworks.stop();
    }, 3000);
});