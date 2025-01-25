const intro = "Hi! My name is Tony Wang";
const introEle = document.getElementById("typingEffect");
const i = 0;

function type(msg, element, i) {
  if (i < msg.length) {
    element.innerHTML += msg.charAt(i);
    i++;
    setTimeout(() => type(msg, element, i), 75)
  }
}

type(intro, introEle, i)