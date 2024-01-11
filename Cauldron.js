class Cauldron {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spawnBubbles = false;
    this.body = document.createElement('div');
    this.body.addEventListener("click", () => {
      const interval = setInterval(() => {
        if (this.spawnBubbles) {
          generateRandomBubble(this);
        } else {
          clearInterval(interval); 
        }
      }, 1000);
      
      this.spawnBubbles = !this.spawnBubbles;
    })
    this.body.classList.add('cauldron');
    this.bubbles = [];
  }
}