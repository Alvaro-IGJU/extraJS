class Cauldron {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.body = document.createElement('div');
      this.body.classList.add('cauldron');
      this.bubbles = [];
    }
  }