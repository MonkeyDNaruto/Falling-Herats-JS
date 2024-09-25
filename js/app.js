const body = document.querySelector("body");

class Heart {
  constructor(color, position, speed) {
    this.color = color;
    this.position = position;
    this.speed = speed;
  }
  draw() {
    let timerID;
    let top = 0;
    const divElement = document.createElement("div");
    divElement.classList.add("heart");
    divElement.style.left = this.position + "px";
    divElement.style.setProperty("--c", this.color);
    body.append(divElement);

    function move() {
      divElement.style.top = top + "px";

      top += 10;

      if (top >= window.innerHeight) {
        clearInterval(timerID);
        divElement.remove();
      }
    }

    timerID = setInterval(move, this.speed);
  }
}

function addHeart() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randonLeft = Math.floor(Math.random() * window.innerWidth);
  const randomSpeed = Math.floor(Math.random() * 500);

  const newHeart = new Heart(randomColor, randonLeft, randomSpeed);
  newHeart.draw();
}

setInterval(addHeart, 500);
