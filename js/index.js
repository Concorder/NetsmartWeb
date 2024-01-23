//gsap block appearance
const blocksUp = document.querySelectorAll(".gsapUp")
blocksUp.forEach(block => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "+=300px",
            scrub: 0.5,
            markers: false,
            toggleActions: "restart none reverse none",
        },
        transform: "translate(0, +50px)",
        opacity: 0,
        marginBottom: 0,
        duration: 1,
        delay: .3,
        repeat: 0,
        repeatDelay: 0,
        ease: "power1",
        paused: false,
    });
});
const blocksLeft = document.querySelectorAll(".gsapLeft")
blocksLeft.forEach(block => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "+=300px",
            scrub: 1,
            markers: false,
            toggleActions: "restart none reverse none",
        },
        transform: "translate(-50px, 0)",
        opacity: 0,
        marginBottom: 0,
        duration: 1,
        delay: .3,
        repeat: 0,
        repeatDelay: 0,
        ease: "power1",

        paused: false,
    });
})
const blocksRight = document.querySelectorAll(".gsapRight")
blocksRight.forEach(block => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "+=300px",
            scrub: 1,
            markers: false,
            toggleActions: "restart none reverse none",
        },
        transform: "translate(+50px, 0)",
        opacity: 0,
        marginBottom: 0,
        duration: 1,
        delay: .3,
        repeat: 0,
        repeatDelay: 0,
        ease: "power1",

        paused: false,
    });
})

//highlight text

let sentences = document.querySelectorAll(".toLightUp span");
sentences.forEach(function (target) {
    gsap.to(target, {
        scrollTrigger: {
            trigger: target,
            start: "top center",
            end: `+=${(target.offsetHeight) * 1.8}`,
            scrub: 1,
            markers: false,
            toggleClass: "highlight",
        },
        delay: .3,
        repeat: 0,
        repeatDelay: 0,
        ease: "power0",
        duration: 1,
        paused: false,
    });
});
//on screen trigger
const blocksOnScreen = document.querySelectorAll(".onScreenTrigger")
//nav links highlight
const navigationLinks = document.querySelectorAll('.company_link, .payments_link, .messaging_link');

navigationLinks.forEach(link => {
    const targetSelector = link.getAttribute('href');
    const section = document.querySelector(targetSelector);

    gsap.to(link, {
        scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            end: 'bottom 50%',
            onToggle: self => {
                if (self.isActive) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            },
            // markers: true, // Remove this line in production
        },
    });
});

// splashtext
function splashText() {
    let cta = document.querySelector('.cta');
    let newCta = "<span>" + cta.innerHTML.replaceAll(" ", " </span><span>") + "</span>";
    cta.innerHTML = newCta;
    let words = document.querySelectorAll('.cta span');
    words.forEach(function (word) {

        let newWord = "";
        for (let i = 0; i < word.innerHTML.length; i++) {
            let newSym = "<i>" + word.innerHTML[i] + "</i>";
            newWord = newWord + newSym;
        }
        word.innerHTML = newWord;
    });
    let lamps = document.querySelectorAll('.cta i');
    lamps.forEach(function (e) {
        var randomPoseX = (Math.ceil(Math.random() * 2000) - 1000);
        var randomPoseY = (Math.ceil(Math.random() * 2000) - 1000);
        e.style.transform = `translate(${randomPoseX}%, ${randomPoseY}%`;
        // var randomDelay = (Math.ceil(Math.random() * 10)) / 5;
        // e.style.animationDelay = randomDelay + "s";
    });
}

splashText()