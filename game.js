const redBubbleBtn = document.getElementById("redBubbleBtn");
const blueBubbleBtn = document.getElementById("blueBubbleBtn");
const bombBubbleBtn = document.getElementById("bombBubbleBtn");
const nitroBubbleBtn = document.getElementById("nitroBubbleBtn");
const specialBubbleBtn = document.getElementById("specialBubbleBtn");

const gameElement = document.getElementById('game');
const gameWidth = gameElement.getBoundingClientRect().width;
const gameHeight = gameElement.getBoundingClientRect().height;

const cauldron = new Cauldron(gameWidth / 2, gameHeight);

addNewElement(cauldron);


redBubbleBtn.addEventListener('click', () => {
    let redBubble = new RedBubble(cauldron.x,cauldron.y,"red");
    cauldron.bubbles.push(redBubble);
    redBubble.body.classList.add('redBubble');
    addNewElement(redBubble);

});




function addNewElement(element){
    gameElement.append(element.body);
    element.body.style.position = 'absolute';
    element.body.style.left = `${cauldron.x}px`; 
    element.body.style.top = `${cauldron.y}px`; 
}

const intervalo = setInterval(()=>{
    cauldron.bubbles.forEach((b)=>{
        b.move();
    });
}, 100); // 2000 milisegundos = 2 segundos
