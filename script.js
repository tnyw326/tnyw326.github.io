const intro = "Hi! My name is Tony Wang";
const introEle = document.getElementById("intro");

const aboutMe = "About Me";
const aboutMeHeader = document.getElementById("about-me");

let cursor1 = document.getElementById("cursor1");
let cursor2 = document.getElementById("cursor2");

const content = "I’m currently an undergraduate student at the University of British Columbia (UBC), majoring in Computer Science. I have a deep passion for technology and problem-solving, and I'm constantly exploring new ways to apply my skills to real-world challenges. Whether it's coding, developing websites, or diving into complex algorithms, I enjoy the process of turning ideas into functional solutions."
const contentEle = document.getElementById("content");

const i = 0;

function type(msg, element, i, waitTime) {
  if (i < msg.length) {
    element.innerHTML += msg.charAt(i);
    i++;
    setTimeout(() => type(msg, element, i, waitTime), waitTime);
  } else {
    if (aboutMeHeader.innerHTML === "") {
      setTimeout (() => {
        cursor1.style.animationPlayState = "paused";
        cursor1.style.color = "black";
        cursor2.style.color = "white";
        type(aboutMe, aboutMeHeader, 0, 75);
      }, 750);
    } else if (contentEle.innerHTML === "") {
      setTimeout (()=> {
        cursor2.style.animationPlayState = "paused";
        cursor2.style.color = "black";
        cursor3.style.color = "white";
        type(content, contentEle, 0, 10);
      }, 750)
    }
  }
}

type(intro, introEle, i, 75);