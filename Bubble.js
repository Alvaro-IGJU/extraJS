class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = document.createElement('div');
        this.body.classList.add('bubble');
        this.body.addEventListener("click",()=>{
               this.destroy();
        })
    }

    destroy() {
        if (this.body && this.body.parentNode) {
            this.body.parentNode.removeChild(this.body);
        }
    }

    move() {
        const randomX = Math.random() * 40 - 20; 
        this.x += randomX;
        this.y--;
        this.body.style.left = `${this.x}px`;
        this.body.style.top = `${this.y}px`;
    }
}

class RedBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
    }
}

class BlueBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
    }
}

class BombBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
    }
}

class NitroBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
    }
}

class SpecialBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
    }
}