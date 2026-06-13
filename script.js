// ==========================================
// BOTON DESCUBRIR
// ==========================================

document.querySelector(".discover-btn")
.addEventListener("click", (e) => {

    e.preventDefault();

    bgMusic.play();
    playing = true;

    document.querySelector(".intro")
    .scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

// ==========================================
// CUENTA REGRESIVA
// ==========================================

const eventDate =
new Date("July 25, 2026 18:00:00")
.getTime();

const countdown = () => {

const now =
new Date().getTime();

const distance =
eventDate - now;

const days =
Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
);

const hours =
Math.floor(
    (distance %
    (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60)
);

const minutes =
Math.floor(
    (distance %
    (1000 * 60 * 60))
    /
    (1000 * 60)
);

const seconds =
Math.floor(
    (distance %
    (1000 * 60))
    /
    1000
);

document.getElementById("days")
.innerHTML = days;

document.getElementById("hours")
.innerHTML = hours;

document.getElementById("minutes")
.innerHTML = minutes;

document.getElementById("seconds")
.innerHTML = seconds;


}

setInterval(countdown,1000);

countdown();

// ==========================================
// SCROLL REVEAL
// ==========================================
/*
const reveals =
document.querySelectorAll(

".glass-card, .glass-section, .single-photo, .confirmation, .sponsors, .special-message"

);

function revealElements(){


reveals.forEach(el => {

    const top =
    el.getBoundingClientRect().top;

    const visible =
    window.innerHeight - 120;

    if(top < visible){

        el.classList.add("active");

    }

});


}

window.addEventListener(
"scroll",
revealElements
);

revealElements();
*/
// ==========================================
// PARTICULAS BRILLANTES
// ==========================================

const particles =
document.getElementById("particles");

function createSparkle(){


const sparkle =
document.createElement("span");

sparkle.classList.add("sparkle");

sparkle.style.left =
Math.random() * (window.innerWidth - 10) + "px";

sparkle.style.width =
Math.random() * 5 + 2 + "px";

sparkle.style.height =
sparkle.style.width;

sparkle.style.animationDuration =
Math.random() * 5 + 4 + "s";

particles.appendChild(sparkle);

setTimeout(() => {

    sparkle.remove();

}, 9000);


}

setInterval(createSparkle,600);

// ==========================================
// EFECTO PARALLAX SUAVE
// ==========================================

if (window.innerWidth > 768) {

  window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;
    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = scroll * 0.5 + "px";

  });

}


// ==========================================
// BRILLO EN TITULOS
// ==========================================

const titles =
document.querySelectorAll(
"h1,h2"
);

titles.forEach(title => {


title.addEventListener(
"mouseenter",
() => {

    title.style.transition =
    ".4s";

    title.style.textShadow =
    "0 0 20px rgba(255,255,255,.8)";

});

title.addEventListener(
"mouseleave",
() => {

    title.style.textShadow =
    "";

});


});

// ==========================================
// FOTO FINAL FADE
// ==========================================

const ending =
document.querySelector(".ending");

if(ending){

    window.addEventListener(
    "scroll",
    () => {

        const rect =
        ending.getBoundingClientRect();

        if(rect.top < window.innerHeight){

            ending.style.opacity = "1";

        }

    });

}

// ==========================================
// EFECTO SUAVE DE CARGA
// ==========================================

window.addEventListener(
"load",
() => {


document.body.style.opacity =
"1";


});

// ==========================================
// MENSAJE CONSOLA
// ==========================================

console.log(
"XV Dayana López Pérez"
);
