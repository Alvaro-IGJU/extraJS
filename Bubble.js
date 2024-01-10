class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = document.createElement('div');
        this.body.classList.add('bubble');
        console.log(this.constructor.name)

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
    static pressedKey = null;
    static tempKey = null;
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
        this.body.addEventListener("click", (event) => {
            if (RedBubble.tempKey) {
               RedBubble.pressedKey = RedBubble.tempKey;
               redBubbleBtn.textContent = RedBubble.pressedKey;
            } 
            addPoint();
            
        });

        this.body.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.destroy();
            substractPoint();
        });

        
    }
}

class BlueBubble extends Bubble {
    static pressedKey = null;
    static tempKey = null;

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.addEventListener("click",()=>{
            this.destroy();
            substractPoint()

     })
        this.body.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            this.destroy();
            addPoint();
     })
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
        this.body.addEventListener("click",()=>{
            addPoint();              
     })
     this.body.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        this.destroy();
        //Resta un punto 
        substractPoint()
 })
    }
}

class SpecialBubble extends Bubble {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.body.style.backgroundColor = color;
        this.body.addEventListener("click",()=>{
            addPoint();              
     })
     this.body.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        this.destroy();
        //Resta un punto 
        substractPoint()
 })
    }
}