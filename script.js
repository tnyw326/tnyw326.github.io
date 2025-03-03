const intro = "Hi! I'm Tony";
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
  }
  // } else {
  //   if (aboutMeHeader.innerHTML === "") {
  //     setTimeout (() => {
  //       cursor1.style.animationPlayState = "paused";
  //       cursor1.style.color = "black";
  //       cursor2.style.color = "white";
  //       type(aboutMe, aboutMeHeader, 0, 75);
  //     }, 750);
  //   } else if (contentEle.innerHTML === "") {
  //     setTimeout (()=> {
  //       cursor2.style.animationPlayState = 'paused';
  //       cursor2.style.color = "black";
  //       cursor3.style.color = "white";
  //       type(content, contentEle, 0, 10);
  //     }, 750)
  //   }
  // }
}

type(intro, introEle, i, 75);

const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

function setActiveLinkOnClickNavBar(event) {
  navLinks.forEach(link => link.classList.remove('active'));

  event.target.classList.add('active');
}

function setActiveLinkOnScroll(entries) {
  if (!shouldUseObserver) return;
  entries.forEach(entry => {
    const link = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      if(shouldUseObserver){
        link.classList.add('active');
      }
      
    } else {
      link.classList.remove('active');
    }
  });
}

const observer = new IntersectionObserver(setActiveLinkOnScroll, {
  threshold: 0.5
});
let shouldUseObserver = true;

sections.forEach(section => observer.observe(section));

navLinks.forEach(link => {
  link.addEventListener('click', setActiveLinkOnClickNavBar);
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    shouldUseObserver = false;
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(()=> {
      shouldUseObserver = true;
    }, 500);
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const projects = document.querySelectorAll(".project-content");
//   let currentIndex = 0;

//   function showProject(index) {
//     projects.forEach((project, i) => {
//       project.style.transform = `translateX(${i* 100}%)`;
//     });
// }

//   document.getElementById("prevBtn").addEventListener("click", function () {
//     currentIndex = (currentIndex - 1 + projects.length) % projects.length;
//     showProject(currentIndex);
//   });

//   document.getElementById("nextBtn").addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % projects.length;
//     showProject(currentIndex);
//   });

//   showProject(currentIndex);
// });

const projects = document.querySelectorAll(".project-content");
let currentIndex = 1;

document.getElementById("nextBtn").addEventListener("click", function () {
  currentIndex += 1;
  console.log(currentIndex);
  if (currentIndex > projects.length) {
    currentIndex = 1;
    projects.forEach((project) => {
      project.style.transform = `translateX(${0 * 100}%)`;
    });
  } else {
    projects.forEach((project) => {
      project.style.transform = `translateX(${(currentIndex - 1) * -100}%)`;
    });
  }
});

document.getElementById("prevBtn").addEventListener("click", function () {
  currentIndex -= 1;
  console.log(currentIndex);
  if (currentIndex < 1) {
    currentIndex = 3;
    projects.forEach((project) => {
      project.style.transform = `translateX(${(projects.length-1) * -100}%)`;
    });
  } else {
    projects.forEach((project) => {
      project.style.transform = `translateX(${(currentIndex - 1) * -100}%)`;
    });
  }
});