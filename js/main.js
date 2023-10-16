setCurrentYear = function () {
  const today = new Date();
  let fullYear = today.getFullYear()
  const yearSpan = document.getElementById("year");
  yearSpan.innerText = fullYear

}
setCurrentYear()

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
//on screen trigger
const blocksOnScreen = document.querySelectorAll(".onScreenTrigger")
blocksOnScreen.forEach(function (target) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      markers: false,
      toggleClass: "onScreen",
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
  let lamps = document.querySelectorAll('.cta i');
  lamps.forEach(function (e) {
    var randomPoseX = (Math.ceil(Math.random() * 2000) - 1000);
    var randomPoseY = (Math.ceil(Math.random() * 2000) - 1000);
    e.style.transform = `translate(${randomPoseX}%, ${randomPoseY}%`;
    var randomDelay = (Math.ceil(Math.random() * 30)) / 10;
    e.style.animationDelay = randomDelay + "s";
  });
}

splashText()

//burger trigger
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.toggle('active');
});


// //hacker text
// const alphabet = [
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
//   "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
// ];
//
// let letter_count = 0;
// const el = document.getElementById("loading");
// const word = el.innerHTML.trim();
// let finished = false;
//
// el.innerHTML = "";
//
// for (let i = 0; i < word.length; i++) {
//   const span = document.createElement("span");
//   span.innerHTML = word.charAt(i);
//   el.appendChild(span);
// }
// const spans = document.querySelectorAll("#loading span");
//
//
// ScrollTrigger.create({
//   trigger: '.onScreenTrigger',
//   onEnter: hackerText,
//
// })
//
// function hackerText() {
//
//   setTimeout(write, 75);
//   const incrementer = setTimeout(inc, 1000);
//   console.log("func")
//   reset()
// }
//
//
// function write() {
//   if (el.classList.contains('onScreen')) {
//     for (let i = letter_count; i < word.length; i++) {
//       const c = Math.floor(Math.random() * 36);
//       spans[i].innerHTML = alphabet[c];
//       console.log("write")
//     }
//     if (!finished) {
//       setTimeout(write, 75);
//
//     }
//   }
// }
//
// function inc() {
//   if (el.classList.contains('onScreen')) {
//   spans[letter_count].innerHTML = word[letter_count];
//   spans[letter_count].classList.add("glow");
//   letter_count++;
//   if (letter_count >= word.length) {
//     finished = true;
//   } else {
//     setTimeout(inc, 200);
//   }
// }}
//
// function reset() {
//   letter_count = 0;
//   finished = false;
//   spans.forEach(span => span.classList.remove("glow"));
// }
// //hackertext animation ends





