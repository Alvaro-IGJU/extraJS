class Bubble {

	static booster = 1;
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
			console.log("AAA")         
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

class BoosterBubble extends Bubble {
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
	
	destroy() {
		Bubble.booster = 2;
		const bubbles = document.getElementsByClassName("bubble");
		document.getElementById("boosterActivated").classList.add("boosterActivated");
		document.getElementById("boosterActivated").textContent = "Booster x2 Activated"
		for (let i = 0; i < bubbles.length; i++) {
			bubbles[i].classList.add("centelleo");
		  }
		setTimeout(function() {
			Bubble.booster = 1;
			document.getElementById("boosterActivated").classList.remove("boosterActivated");
		document.getElementById("boosterActivated").textContent = ""
			
			for (let i = 0; i < bubbles.length; i++) {
				bubbles[i].classList.remove("centelleo");
			  }

		  }, 5000);
		super.destroy();
		
		
		
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