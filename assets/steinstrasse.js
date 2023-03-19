var toNeuerWall = [];
var toNeumarkt = [];
var posToNeuerWall1 = [];
var posToNeuerWall2 = [];
var posToNeuerWall3 = [];
var posToNeuerWall4 = [];
var posToNeumark1 = [];
var posToNeumark2 = [];
var posToNeumark3 = [];
var posToNeumark4 = [];

function nextStepSprite(sprite) {
    if (sprite.remaining > 0) {
        var x = sprite.x1 + (sprite.x2 - sprite.x1) / sprite.steps * (sprite.steps - sprite.remaining);
        var y = sprite.y1 + (sprite.y2 - sprite.y1) / sprite.steps * (sprite.steps - sprite.remaining);
        sprite.path.setAttribute('transform', 'translate(' + x + ',' + y + ')');

        --sprite.remaining;
    }
}

function nextStep() {
    nextStepSprite(toNeuerWall[0]);
    nextStepSprite(toNeumarkt[0]);
}

function spornSprite(isNeuerWall) {
    var pos1 = isNeuerWall ? posToNeuerWall1 : posToNeumark1;
    var pos2 = isNeuerWall ? posToNeuerWall2 : posToNeumark2;
    var pos3 = isNeuerWall ? posToNeuerWall3 : posToNeumark3;
    var pos4 = isNeuerWall ? posToNeuerWall4 : posToNeumark4;
    var sprite = isNeuerWall ? toNeuerWall[0] : toNeumarkt[0];

    var rand = Math.random();
    var posX1 = pos2[0] * 1. - (pos2[0] - pos1[0]) * rand;
    var posY1 = pos2[1] * 1. - (pos2[1] - pos1[1]) * rand;
    rand = Math.random();
    var posX2 = pos2[0] * 1. - (pos4[0] - pos3[0]) * rand + (pos4[0] - pos2[0]);
    var posY2 = pos2[1] * 1. - (pos4[1] - pos3[1]) * rand + (pos4[1] - pos2[1]);

    sprite.remaining = 60 * 2 + parseInt(60 * Math.random());
    sprite.steps = sprite.remaining;
    sprite.x1 = posX1 - pos2[0] * 1.;
    sprite.y1 = posY1 - pos2[1] * 1.;
    sprite.x2 = posX2 - pos2[0] * 1.;
    sprite.y2 = posY2 - pos2[1] * 1.;
    sprite.path.setAttribute('transform', 'translate(' + sprite.x1 + ',' + sprite.y1 + ')');
}

function initSprites() {
    var i;

    i = 1;
    while (true) {
        var obj = document.querySelector('#pl-' + i);
        if (null === obj) {
            break;
        }
        toNeuerWall.push({
            path: obj,
            remaining: 0,
            steps: 0,
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0,
        });

        ++i;
    }

    i = 1;
    while (true) {
        var obj = document.querySelector('#pr-' + i);
        if (null === obj) {
            break;
        }
        toNeumarkt.push({
            path: obj,
            remaining: 0,
            steps: 0,
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0,
        });

        ++i;
    }

    var lineToNeuerWall1 = document.querySelector('#left-1');
    var lineToNeuerWall2 = document.querySelector('#left-2');
    var lineToNeuerWall3 = document.querySelector('#left-3');
    var lineToNeuerWall4 = document.querySelector('#left-4');
    var lineToNeumark1 = document.querySelector('#right-1');
    var lineToNeumark2 = document.querySelector('#right-2');
    var lineToNeumark3 = document.querySelector('#right-3');
    var lineToNeumark4 = document.querySelector('#right-4');

    var path = lineToNeuerWall1;
    var d = path.getAttribute('d');
    var segments = d.split(' ');
    posToNeuerWall1 = segments[1].split(',');

    path = lineToNeuerWall2;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeuerWall2 = segments[1].split(',');

    path = lineToNeuerWall3;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeuerWall3 = segments[1].split(',');

    path = lineToNeuerWall4;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeuerWall4 = segments[1].split(',');

    path = lineToNeumark1;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeumark1 = segments[1].split(',');

    path = lineToNeumark2;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeumark2 = segments[1].split(',');

    path = lineToNeumark3;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeumark3 = segments[1].split(',');

    path = lineToNeumark4;
    d = path.getAttribute('d');
    segments = d.split(' ');
    posToNeumark4 = segments[1].split(',');
}

function animate() {
    try {
        nextStep();
    } catch(x) {
        console.error(x);
    }

    requestAnimationFrame(animate);
}

initSprites();
requestAnimationFrame(animate);

spornSprite(true);
spornSprite(false);