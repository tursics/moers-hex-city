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
let angle = 0;

function nextStep() {
    angle += 2;
//    toNeuerWall[0].setAttribute("transform", "rotate(" + angle + " 125 125)")
//    toNeumarkt[0].setAttribute("transform", "rotate(" + angle + " 125 125)")
}

function spornSprite(isNeuerWall) {
    var pos1 = isNeuerWall ? posToNeuerWall1 : posToNeumark1;
    var pos2 = isNeuerWall ? posToNeuerWall2 : posToNeumark2;
    var sprite = isNeuerWall ? toNeuerWall[0] : toNeumarkt[0];

    var rand = Math.random(1);
    var diffX = Math.abs(pos1[0] - pos2[0]) * rand;
    var diffY = Math.abs(pos1[1] - pos2[1]) * rand;
    sprite.setAttribute('transform', 'translate(' + (-diffX) + ',' + (diffY) + ')');
}

function initSprites() {
    var i;

    i = 1;
    while (true) {
        var obj = document.querySelector('#pl-' + i);
        if (null === obj) {
            break;
        }
        toNeuerWall.push(obj);

        ++i;
    }

    i = 1;
    while (true) {
        var obj = document.querySelector('#pr-' + i);
        if (null === obj) {
            break;
        }
        toNeumarkt.push(obj);

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