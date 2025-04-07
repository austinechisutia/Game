const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


let wrestler1 = {
    x: 100,
    y: 300,
    width: 50,
    height: 100,
    color: 'blue'
  };
  
  let wrestler2 = {
    x: 300,
    y: 300,
    width: 50,
    height: 100,
    color: 'red'
  };
  
  function drawWrestlers() {
    ctx.fillStyle = wrestler1.color;
    ctx.fillRect(wrestler1.x, wrestler1.y, wrestler1.width, wrestler1.height);
  
    ctx.fillStyle = wrestler2.color;
    ctx.fillRect(wrestler2.x, wrestler2.y, wrestler2.width, wrestler2.height);
  }
  
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen
    drawWrestlers();
    requestAnimationFrame(gameLoop);
  }
  
  gameLoop();


  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') wrestler1.y -= 10; // Move wrestler 1 up
    if (e.key === 'ArrowDown') wrestler1.y += 10; // Move wrestler 1 down
    if (e.key === 'ArrowLeft') wrestler1.x -= 10; // Move wrestler 1 left
    if (e.key === 'ArrowRight') wrestler1.x += 10; // Move wrestler 1 right
  
    if (e.key === 'w') wrestler2.y -= 10; // Move wrestler 2 up
    if (e.key === 's') wrestler2.y += 10; // Move wrestler 2 down
    if (e.key === 'a') wrestler2.x -= 10; // Move wrestler 2 left
    if (e.key === 'd') wrestler2.x += 10; // Move wrestler 2 right
  });
  

  function checkCollision() {
    if (wrestler1.x < wrestler2.x + wrestler2.width &&
      wrestler1.x + wrestler1.width > wrestler2.x &&
      wrestler1.y < wrestler2.y + wrestler2.height &&
      wrestler1.y + wrestler1.height > wrestler2.y) {
      console.log("Collision detected!");
      // Handle the collision (e.g., initiate a move or decrease health)
    }
  }

  
  let wrestler1Health = 100;
let wrestler2Health = 100;

function drawHealthBars() {
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, wrestler1Health, 20); // Health bar for wrestler 1

  ctx.fillStyle = 'green';
  ctx.fillRect(canvas.width - 110, 10, wrestler2Health, 20); // Health bar for wrestler 2
}

function decreaseHealth(wrestler) {
  if (wrestler === 1) {
    wrestler1Health -= 10;
  } else {
    wrestler2Health -= 10;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen
  drawWrestlers();
  drawHealthBars();
  checkCollision();
  requestAnimationFrame(gameLoop);
}


document.addEventListener('keydown', function(e) {
    if (e.key === ' ') { // Spacebar = punch
      console.log('Punch!');
      decreaseHealth(2); // Decrease wrestler 2's health on punch
    }
  });

  
  function checkGameOver() {
    if (wrestler1Health <= 0) {
      alert("Wrestler 1 loses!");
      resetGame();
    } else if (wrestler2Health <= 0) {
      alert("Wrestler 2 loses!");
      resetGame();
    }
  }
  
  function resetGame() {
    wrestler1Health = 100;
    wrestler2Health = 100;
    wrestler1.x = 100;
    wrestler1.y = 500;
    wrestler2.x = 650;
    wrestler2.y = 500;
  }
  
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWrestlers();
    drawHealthBars();
    checkCollision();
    checkGameOver();
    requestAnimationFrame(gameLoop);
  }
  
  