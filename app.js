const b = document.querySelector('button.td')
b.addEventListener("mouseover", moverHover)

function moverHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
}

const a = document.querySelector('button.jp')
a.addEventListener("mouseover", moverHoverJ)

function moverHoverJ(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    a.style.left=i+"px"
    a.style.top=j+"px"
}

const c = document.querySelector('button.hl')
c.addEventListener("mouseover", moverHoverH)

function moverHoverH(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    c.style.left=i+"px"
    c.style.top=j+"px"
}

const d = document.querySelector('button.nm')
d.addEventListener("mouseover", moverHoverM)

function moverHoverM(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    d.style.left=i+"px"
    d.style.top=j+"px"
}

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.add("close-popup");
}