

document.getElementById('overlay').addEventListener('click', handleOverlayClick);

                                                    
function handleOverlayClick(event) {

    event.preventDefault();
    
    this.style.display = 'none';
    const card = document.getElementById('index');
    const frontDiv = card.querySelector('.front');
    const backDiv = card.querySelector('.back');

    // Show the front and back divs
    card.style.display = 'flex';
    frontDiv.style.display = 'flex';
    backDiv.style.display = 'flex';

    card.style.transform = 'translate(-50%, -50%)';
    
    // Start the spin animation
    card.classList.add('spin');

    card.addEventListener('animationend', () => {
        card.classList.remove('spin');
        showColorShower();
    }, { once: true });
});


function showColorShower() {
    const shower = document.getElementById('shower');
    
    function createDot() {

        const dot = document.createElement('div');
        dot.classList.add('shower-dot');
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.backgroundColor = getRandomColor();
        shower.appendChild(dot);

        dot.addEventListener('animationend', () => {
            dot.remove();
        });
    }

    const interval = setInterval(createDot, 25);

    setTimeout(() => {
        clearInterval(interval);
    }, 60000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
