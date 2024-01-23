




//burger trigger


const mobileMenu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.menu-toggle')
const header = document.querySelector('.header_container')
burger.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

const mobileLinks = mobileMenu.querySelectorAll('a')
mobileLinks.forEach((link)=>{
  link.addEventListener('click', hideMobileMenu)
})
function hideMobileMenu(){
  mobileMenu.classList.remove('active');
}
document.body.addEventListener('click', function (event){
  if (!mobileMenu.contains(event.target) && !header.contains(event.target)){
    hideMobileMenu();
  }
})





// //hacker text

// blocksOnScreen.forEach(function (target) {
//   gsap.to(target, {
//     scrollTrigger: {
//       trigger: target,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1,
//       markers: false,
//       toggleClass: "onScreen",
//     },
//     delay: .3,
//     repeat: 0,
//     repeatDelay: 0,
//     ease: "power0",
//     duration: 1,
//     paused: false,
//   });
// });
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

setCurrentYear = function () {
  const today = new Date();
  let fullYear = today.getFullYear()
  const yearSpan = document.getElementById("year");
  yearSpan.innerText = fullYear

}
setCurrentYear()





