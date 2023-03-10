import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const num = document.querySelector(".loading__counter--number");
let c = 0;
let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    num.innerText = c + "%";
    c++;
    if (c == 101) {
        clearInterval(barInterval);
        gsap.to(".loading__bar", {
            duration: 5,
            rotate: "90deg",
            left: "1000%"
        });
        gsap.to(".loading__text,.loading__counter", {
            duration: 0.5,
            opacity: 0,
        });
        gsap.to(".loading__box", {
            duration: 1,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".svg1", {
            duration: 8,
            opacity: 100,
            rotate: "360deg",
        });
        gsap.to(".loading__box", {
            delay: 2,
            border: "none",
        });
        gsap.to(".loading", {
            delay: 2,
            duration: 3,
            background: "transparent",
        });
        gsap.to(".loading", {
            delay: 2,
            duration: 0.4,
            display: "none",
            opacity: 0
        });
        gsap.to(".svg1", {
            duration: 200,
            rotate: "1800deg",
        });
        // gsap.to(".bg-text", {
        //     opacity: 100,
        //     zIndex: 2,
        //     delay: 2,
        // })
    }
}, 20);