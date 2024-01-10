let playerPoints = 0;

const redBubbleBtn = document.getElementById("redBubbleBtn");
const blueBubbleBtn = document.getElementById("blueBubbleBtn");
const bombBubbleBtn = document.getElementById("bombBubbleBtn");
const boosterBubbleBtn = document.getElementById("boosterBubbleBtn");
const specialBubbleBtn = document.getElementById("specialBubbleBtn");

const gameElement = document.getElementById('game');
const gameWidth = gameElement.getBoundingClientRect().width;
const gameHeight = gameElement.getBoundingClientRect().height;

const cauldron = new Cauldron(gameWidth / 2, gameHeight);

addNewElement(cauldron);


addEventListener("keypress", ()=>{
    
})

redBubbleBtn.addEventListener('click', () => {
    let redBubble = new RedBubble(cauldron.x,cauldron.y,"red");
    cauldron.bubbles.push(redBubble);
    redBubble.body.classList.add('redBubble');
    addNewElement(redBubble);
    
});

blueBubbleBtn.addEventListener('click', () => {
    let blueBubble = new BlueBubble(cauldron.x,cauldron.y,"blue");
    cauldron.bubbles.push(blueBubble);
    blueBubble.body.classList.add('blueBubble');
    addNewElement(blueBubble);
    
});

bombBubbleBtn.addEventListener('click', () => {
    let bombBubble = new BombBubble(cauldron.x,cauldron.y,"grey");
    cauldron.bubbles.push(bombBubble);
    bombBubble.body.classList.add('bombBubble');
    addNewElement(bombBubble);
    
});

boosterBubbleBtn.addEventListener('click', () => {
    let boosterBubble = new BoosterBubble(cauldron.x,cauldron.y,"yellow");
    cauldron.bubbles.push(boosterBubble);
    boosterBubble.body.classList.add('boosterBubble');
    addNewElement(boosterBubble);
    
});

specialBubbleBtn.addEventListener('click', () => {
    let specialBubble = new SpecialBubble(cauldron.x,cauldron.y,"green");
    cauldron.bubbles.push(specialBubble);
    specialBubble.body.classList.add('specialBubble');
    addNewElement(specialBubble);
    
});


function addNewElement(element){
    gameElement.append(element.body);
    element.body.style.position = 'absolute';
    element.body.style.left = `${cauldron.x}px`; 
    element.body.style.top = `${cauldron.y}px`; 
    
}

function addPoint(points = 1){
    playerPoints += points*Bubble.booster;
    document.getElementById("points").textContent = playerPoints;
}
function substractPoint(points = 1){
    playerPoints-=1;
    document.getElementById("points").textContent = playerPoints;
}

function destroyBubbles(){
    cauldron.bubbles.forEach((b)=>{
        if(b.constructor.name != "BlueBubble"){
            b.destroy();
        }
    })
}

const intervalo = setInterval(()=>{
    cauldron.bubbles.forEach((b)=>{
        b.move();
    });
    console.log(Bubble.booster)
}, 100); 
