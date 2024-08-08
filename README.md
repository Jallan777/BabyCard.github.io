<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Baby Gender!</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #fef5c9;
            margin: 0;
            overflow: hidden;
        }
        
        .card {
            width: 200px;
            height: 300px;
            perspective: 1000px;
            position: absolute;
            cursor: pointer;
            transform-style: preserve-3d;
            display: none;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .card div {
            width: 100%;
            height: 100%;
            position: absolute;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: bold;
            border: 8px solid rgba(44, 22, 90, 0.65);
            border-radius: 20px;
        }
        
        .front {
            background-color: #57ffdd;
            transform: rotateY(0deg);
            display: flex;
        }
        
        .back {
            background-color: #ad42f5;
            transform: rotateY(180deg);
            display: flex;
        }
        
        .spin {
            animation: spin 2s ease-in-out forwards;
            transform-origin: left;
        }
        
        @keyframes spin {
            0% {
                transform: rotateY(0) translate(-50%, -50%);
            }
            100% {
                transform: rotateY(1080deg) translate(-50%, -50%);
            }
        }

        .overlay {
            position: absolute;
            width: 200px;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(225, 227, 106);
            border: 8px solid rgba(44, 22, 90, 0.65);
            color: rgb(40, 34, 34);
            font-size: 24px;
            border-radius: 20px;
            cursor: pointer;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        #shower {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .shower-dot {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
            animation: fall 3s ease-out forwards;
        }
        
        @keyframes fall {
            0% {
                opacity: 1;
                transform: translateY(-50px);
            }
            100% {
                opacity: 0.1;
                transform: translateY(100vh);
            }
        }
    </style>
</head>
<body>
    <div class="card" id="card">
        <div class="front">Boy</div>
        <div class="back">Girl</div>
    </div>
    <div class="overlay" id="overlay">Click Me!</div>
    <div id="shower"></div>
    <script>
        document.getElementById('overlay').addEventListener('click', function() {
            this.style.display = 'none';
            const card = document.getElementById('card');
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
    </script>
</body>
</html>
