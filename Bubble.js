class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        let nums = [50, 100, 120];
        let size = nums[Math.floor(Math.random() * nums.length)];
        this.body = document.createElement('div');
        this.body.classList.add('bubble');
        this.body.style.height = `${size}px`;
        this.body.style.width = `${size}px`;

        this.body.addEventListener("click",()=>{
               this.destroy();              
        })
    }

    destroy() {
        //this.body.parentNode.removeChild(this.body);
        this.body.remove();
        let index = cauldron.bubbles.indexOf(this);
        cauldron.bubbles.splice(index, 1);
       
        
        
    }

    move() {
        const randomX = Math.random() * 20 - 10; 
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
        this.body.addEventListener("click", (event) => {
          
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

    destroy() {
        let index = cauldron.bubbles.indexOf(this);
        
            
            if(cauldron.bubbles[index -1])
            cauldron.bubbles[index -1].destroy();
        
           
            if(cauldron.bubbles[index])
            cauldron.bubbles[index].destroy();
            super.destroy();
            

            
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