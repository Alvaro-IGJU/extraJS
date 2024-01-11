let playerPoints = 0;
let destroyBubblesKey = null;
let destroyBlueBubblesKey = null;
let tempKey = null;

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


addEventListener("keypress", () => {

})

redBubbleBtn.addEventListener('click', () => {
    if (tempKey != null) {
        destroyBubblesKey = tempKey;
        redBubbleBtn.textContent = tempKey;
    } else {
        let redBubble = new RedBubble(cauldron.x, cauldron.y, "red");
        cauldron.bubbles.push(redBubble);
        redBubble.body.classList.add('redBubble');
        addNewElement(redBubble);
    }


});

blueBubbleBtn.addEventListener('click', () => {
    if (tempKey != null) { 
        destroyBlueBubblesKey = tempKey;
        blueBubbleBtn.textContent = tempKey;
    } else {
        let blueBubble = new BlueBubble(cauldron.x, cauldron.y, "blue");
        cauldron.bubbles.push(blueBubble);
        blueBubble.body.classList.add('blueBubble');
        addNewElement(blueBubble);
    }
});

bombBubbleBtn.addEventListener('click', () => {
    let bombBubble = new BombBubble(cauldron.x, cauldron.y, "grey");
    cauldron.bubbles.push(bombBubble);
    bombBubble.body.classList.add('bombBubble');
    addNewElement(bombBubble);

});

boosterBubbleBtn.addEventListener('click', () => {
    let boosterBubble = new BoosterBubble(cauldron.x, cauldron.y, "yellow");
    cauldron.bubbles.push(boosterBubble);
    boosterBubble.body.classList.add('boosterBubble');
    addNewElement(boosterBubble);

});

specialBubbleBtn.addEventListener('click', () => {
    let specialBubble = new SpecialBubble(cauldron.x, cauldron.y, "green");
    cauldron.bubbles.push(specialBubble);
    specialBubble.body.classList.add('specialBubble');
    addNewElement(specialBubble);

});


function addNewElement(element) {
    gameElement.append(element.body);
    element.body.style.position = 'absolute';
    element.body.style.left = `${cauldron.x}px`;
    element.body.style.top = `${cauldron.y}px`;

}

function addPoint(points = 1) {
    playerPoints += points * Bubble.booster;
    document.getElementById("points").textContent = playerPoints;
}
function substractPoint(points = 1) {
    playerPoints -= points;
    document.getElementById("points").textContent = playerPoints;
}

function destroyBubbles(onlyBlues = false) {

    for (let i = 0; i < cauldron.bubbles.length; i++) {
        if (!onlyBlues && cauldron.bubbles[i].constructor.name != "BlueBubble") {
            cauldron.bubbles[i].destroy();
            i--;
        } else {
            if (onlyBlues && cauldron.bubbles[i].constructor.name == "BlueBubble") {
                cauldron.bubbles[i].destroy();
                i--;
            }
        }


    }

}

function generateRandomBubble(object) {
    let randNum = Math.floor(Math.random() * 5) + 1;
    switch (randNum) {
        case 1:
            const redBubble = new RedBubble(object.x, object.y, "red");
            cauldron.bubbles.push(redBubble);
            redBubble.body.classList.add('redBubble');
            addNewElement(redBubble);
            break;
        case 2:
            const blueBubble = new BlueBubble(object.x, object.y, "blue");
            cauldron.bubbles.push(blueBubble);
            blueBubble.body.classList.add('blueBubble');
            addNewElement(blueBubble);
            break;
        case 3:
            const bombBubble = new BombBubble(object.x, object.y, "grey");
            cauldron.bubbles.push(bombBubble);
            bombBubble.body.classList.add('bombBubble');
            addNewElement(bombBubble);
            break;
        case 4:
            const boosterBubble = new BoosterBubble(object.x, object.y, "yellow");
            cauldron.bubbles.push(boosterBubble);
            boosterBubble.body.classList.add('boosterBubble');
            addNewElement(boosterBubble);
            break;
        case 5:
            const specialBubble = new SpecialBubble(object.x, object.y, "green");
            cauldron.bubbles.push(specialBubble);
            specialBubble.body.classList.add('specialBubble');
            addNewElement(specialBubble);
            break;
        default:
            i--;
    }
}

const intervalo = setInterval(() => {
    cauldron.bubbles.forEach((b) => {
        b.move();
    });
    // console.log(cauldron.bubbles)
}, 100);


document.addEventListener("keydown", function (event) {
    tempKey = event.key;
    if (destroyBubblesKey == tempKey) {
        destroyBubbles();
    }else if(destroyBlueBubblesKey == tempKey){
        destroyBubbles(true);
    }
});

document.addEventListener("keyup", function () {
    tempKey = null;
});

