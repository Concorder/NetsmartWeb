setCurrentYear = function (){
  const today = new Date();
  let fullYear = today.getFullYear()
  const yearSpan = document.getElementById("year");
  yearSpan.innerText = fullYear

}
setCurrentYear()

//gsap block appearance
const blocksUp = document.querySelectorAll(".gsapUp")
blocksUp.forEach(block=>{
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: "top bottom",
      end: "top center",
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
blocksLeft.forEach(block=>{
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: "top bottom",
      end: "top center",
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
blocksRight.forEach(block=>{
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: "top bottom",
      end: "top center",
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
      end: `+=${(target.offsetHeight) * 1.5}`,
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
  //move prize to the new line
  let lamps = document.querySelectorAll('.cta i');
  lamps.forEach(function (e) {
    var randomPoseX = (Math.ceil(Math.random() * 1000));
    var randomPoseY = (Math.ceil(Math.random() * 1000));
    e.style.transform = `translate(${randomPoseX}%, ${randomPoseY}%`;
    var randomDelay = (Math.ceil(Math.random() * 30)) / 10;
    e.style.animationDelay = randomDelay + "s";
  });
}

splashText()
//3d phone




