let coverImg = document.querySelectorAll(".cover-img");
function loadingEffect() {
  setTimeout(() => {
    coverImg[0].classList.add("cover-effect");
  }, 4000);

  let loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
}

let btn = document.getElementById("btn2");

btn.addEventListener("click", () => {
  setTimeout(() => {
    coverImg[1].classList.add("cover-effect");
  }, 1500);
});

let btn2 = document.getElementById('btn3');
btn2.addEventListener("click", () => {
  setTimeout(() => {
    coverImg[2].classList.add("cover-effect");
  }, 1500);
});


const startBtn = document.querySelector(".start_btn");

// display the first question card when clicking start button
startBtn.addEventListener("click", () => {
  const questionCard = document.querySelector(".question-card");
  questionCard.style.display = "none";
  document.querySelector(".inner-header").style.display = "none";
  displayCard(0);
});

// increment the index
let index = 0;
function increment() {
  return index++;
}

//display the card with the given index
function displayCard(x) {
  const secondCard = document.querySelectorAll(".second_card");
  secondCard[x].style.display = "block";
}

const nextBtn = document.querySelectorAll(".next_btn");
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => {
    const secondCard = document.querySelectorAll(".second_card");
    // calling increment function
    increment();
    //limit the increase of the index
    if (index >= secondCard.length) {
      index = 0;
    }
    // hide all question cards
    for (let i = 0; i < secondCard.length; i++) {
      secondCard[i].style.display = "none";
    }
    //calling display function provided with the required index
    displayCard(index);
  });
}

let bodyParts = document.querySelectorAll(".body-parts");
let dropArea = document.querySelectorAll(".drop-area");

let sound = document.getElementById("success_sound");
let celebrationEffect = document.querySelector(".celebration");
let wrongSound = document.getElementById("wrong_sound");

// desktop application
// drag and drop functionality
//fist game
function allowDrop(eo) {
  eo.preventDefault();
  // target drop area
}

function drag(eo) {
  eo.dataTransfer.setData("text", eo.target.id);
}

function drop(eo) {
  // target drop area
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    data === "head" &&
    eo.target.id === "body-head"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "foot" &&
    eo.target.id === "body-foot"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "knees" &&
    eo.target.id === "body-kneeis"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "left-arm" &&
    eo.target.id === "body-left-arm"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "right-arm" &&
    eo.target.id === "body-right-arm"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "skert" &&
    eo.target.id === "body-skert"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "stomack" &&
    eo.target.id === "body-stomack"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else {
    let audio = new Audio("incorrect sound effect.mp3");
    audio.play();}
}


for (let i = 0; i < bodyParts.length; i++) {
  bodyParts[i].addEventListener('dragstart',drag);
  
}

for (let i = 0; i < dropArea.length; i++) {
  dropArea[i].addEventListener('drop',drop);
  dropArea[i].addEventListener('dragover',allowDrop);
}

//second game


let bodyParts2 = document.querySelectorAll(".body-parts2");
let dropArea2 = document.querySelectorAll(".drop-area2");

for (let i = 0; i < bodyParts2.length; i++) {
  bodyParts2[i].addEventListener('dragstart',drag);
  
}

for (let i = 0; i < dropArea2.length; i++) {
  dropArea2[i].addEventListener('dragover',allowDrop);
  dropArea2[i].addEventListener('drop',(eo)=>{
    eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    data === "head2" &&
    eo.target.id === "part1"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "ear2" &&
    eo.target.id === "part2"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "mouth2" &&
    eo.target.id === "part3"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "rest2" &&
    eo.target.id === "part4"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "knee2" &&
    eo.target.id === "part5"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "eye2" &&
    eo.target.id === "part6"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "nose2" &&
    eo.target.id === "part7"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "teeth2" &&
    eo.target.id === "part8"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "hand2" &&
    eo.target.id === "part9"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else if(
    data === "foot2" &&
    eo.target.id === "part10"
  ){
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
  }
  else {
    let audio = new Audio("incorrect sound effect.mp3");
    audio.play();}


  });
  
}

// third game

let answers = document.querySelectorAll(".answers3");

for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener('dragstart',drag);
}


let rightAns1 = document.querySelector('.right-answer');
rightAns1.addEventListener('dragover', allowDrop)
rightAns1.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
  (data === "mother" || data === "father")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
  }
  else {
    let audio = new Audio("incorrect sound effect.mp3");
    audio.play();
  }
});

let wrongAns1 = document.querySelector('.wrong-answer');
wrongAns1.addEventListener('dragover', allowDrop)
wrongAns1.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
  (data === "neighbour" || data === "uncle")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});


let rightAns2 = document.querySelector('.right-answer2');

rightAns2.addEventListener('dragover', allowDrop)
rightAns2.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
  (data === "no")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});

let rightAns3 = document.querySelector('#r1');

rightAns3.addEventListener('dragover', allowDrop)
rightAns3.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    (data === "famile" || data === "sis")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});

let wrongAns3 = document.querySelector('#w1');

wrongAns3.addEventListener('dragover', allowDrop)
wrongAns3.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    (data === "neighbour2" || data === "stranger")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});


let rightAns4 = document.querySelector('#r2');

rightAns4.addEventListener('dragover', allowDrop)
rightAns4.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    (data === "famile1" || data === "sis1")
) {
  document.getElementById(data).style.position = "static";
  eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});

let wrongAns4 = document.querySelector('#w2');

wrongAns4.addEventListener('dragover', allowDrop)
wrongAns4.addEventListener('drop',(eo)=>{
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (
    (data === "neighbour21" || data === "stranger1")
) {
  document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
  sound.play();
  celebrationEffect.style.display = "block";
  setTimeout(() => {
    celebrationEffect.style.display = "none";
  }, 3000);
}
else {
  let audio = new Audio("incorrect sound effect.mp3");
  audio.play();
}
});



// mobile application
// moving the img by touching screen
// first game



for (let i = 0; i < bodyParts.length; i++) {
  bodyParts[i].addEventListener(
    "touchmove",
    function (eo) {
      eo.target.style.position = "absolute";
      //grab the location of the touch
      let touchLocation = eo.targetTouches[0];
      //assign head new coordinates based on the touch
      bodyParts[i].style.left = touchLocation.pageX - 90 + "px";
      bodyParts[i].style.top = touchLocation.pageY - 200 + "px";
      eo.preventDefault();
    },
    false
  );

  bodyParts[i].addEventListener("touchend", function (eo) {
    //current bodyParts[i] position when dropped
    let x = parseInt(bodyParts[i].style.left) + 70;
    let y = parseInt(bodyParts[i].style.top) + 50;
    //check to see if that position meets our constraints
    if (
      y > 4 &&
      y < 80 &&
      x > 33 &&
      x < 150 &&
      eo.target.id === "head" &&
      dropArea[0].id === "body-head"
    ) {
      eo.target.style.position = "static";
      dropArea[0].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 250 &&
      y < 298 &&
      x > 36 &&
      x < 166 &&
      eo.target.id === "foot" &&
      dropArea[1].id === "body-foot"
    ) {
      eo.target.style.position = "static";
      dropArea[1].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 105 &&
      y < 170 &&
      x > 49 &&
      x < 154 &&
      eo.target.id === "stomack" &&
      dropArea[2].id === "body-stomack"
    ) {
      eo.target.style.position = "static";
      dropArea[2].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 160 &&
      y < 225 &&
      x > 40 &&
      x < 165 &&
      eo.target.id === "skert" &&
      dropArea[3].id === "body-skert"
    ) {
      eo.target.style.position = "static";
      dropArea[3].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 190 &&
      y < 260 &&
      x > 40 &&
      x < 160 &&
      eo.target.id === "knees" &&
      dropArea[4].id === "body-kneeis"
    ) {
      eo.target.style.position = "static";
      dropArea[4].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 127 &&
      y < 200 &&
      x > 23 &&
      x < 80 &&
      eo.target.id === "left-arm" &&
      dropArea[5].id === "body-left-arm"
    ) {
      eo.target.style.position = "static";
      dropArea[5].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 112 &&
      y < 190 &&
      x > 131 &&
      x < 200 &&
      eo.target.id === "right-arm" &&
      dropArea[6].id === "body-right-arm"
    ) {
      eo.target.style.position = "static";
      dropArea[6].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else {
      let audio = new Audio("incorrect sound effect.mp3");
      audio.play();
    }
  });
}

// second game


for (let i = 0; i < bodyParts2.length; i++) {
  bodyParts2[i].addEventListener(
    "touchmove",
    function (eo) {
      eo.target.style.position = "absolute";
      //grab the location of the touch
      let touchLocation = eo.targetTouches[0];
      //assign head new coordinates based on the touch
      bodyParts2[i].style.left = touchLocation.pageX - 10 + "px";
      bodyParts2[i].style.top = touchLocation.pageY - 100 + "px";
      eo.preventDefault();
    },
    false
  );

  bodyParts2[i].addEventListener("touchend", function (eo) {
    eo.target.style.position = "static";
    //current bodyParts2[i] position when dropped
    let x = parseInt(bodyParts2[i].style.left);
    let y = parseInt(bodyParts2[i].style.top + 150);
    //check to see if that position meets our constraints
    if (y > 75 && y < 120 && x > 35 && x < 110 && eo.target.id === "head2") {
      dropArea2[0].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 130 &&
      y < 185 &&
      x > 5 &&
      x < 70 &&
      eo.target.id === "ear2"
    ) {
      dropArea2[1].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 185 &&
      y < 240 &&
      x > 15 &&
      x < 80 &&
      eo.target.id === "mouth2"
    ) {
      dropArea2[2].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 250 &&
      y < 310 &&
      x > 12 &&
      x < 85 &&
      eo.target.id === "rest2"
    ) {
      dropArea2[3].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 315 &&
      y < 380 &&
      x > 40 &&
      x < 90 &&
      eo.target.id === "knee2"
    ) {
      dropArea2[4].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 75 &&
      y < 135 &&
      x > 255 &&
      x < 325 &&
      eo.target.id === "eye2"
    ) {
      dropArea2[5].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 130 &&
      y < 190 &&
      x > 285 &&
      x < 360 &&
      eo.target.id === "nose2"
    ) {
      dropArea2[6].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 175 &&
      y < 240 &&
      x > 270 &&
      x < 350 &&
      eo.target.id === "teeth2"
    ) {
      dropArea2[7].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 230 &&
      y < 300 &&
      x > 275 &&
      x < 350 &&
      eo.target.id === "hand2"
    ) {
      dropArea2[8].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 310 &&
      y < 370 &&
      x > 240 &&
      x < 325 &&
      eo.target.id === "foot2"
    ) {
      dropArea2[9].appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else {
      wrongSound.play();
    }
  });
}

//third game (جسمي ملكي)



for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener(
    "touchmove",
    function (eo) {
      eo.target.style.position = "absolute";
      //grab the location of the touch
      let touchLocation = eo.targetTouches[0];
      //assign head new coordinates based on the touch
      answers[i].style.left = touchLocation.pageX - 50 + "px";
      answers[i].style.top = touchLocation.pageY - 130 + "px";

      eo.preventDefault();
    },
    false
  );

  answers[i].addEventListener("touchend", function (eo) {
    eo.target.style.position = "static";
    //current answers[i] position when dropped
    let x = parseInt(answers[i].style.left) + 50;
    let y = parseInt(answers[i].style.top) + 130;

    if (
      y > 173 &&
      y < 460 &&
      x > 193 &&
      x < 355 &&
      (eo.target.id === "mother" || eo.target.id === "father")
    ) {
      let rightAnswerDropArea = document.querySelector(".right-answer");
      rightAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 175 &&
      y < 460 &&
      x > 20 &&
      x < 181 &&
      (eo.target.id === "neighbour" || eo.target.id === "uncle")
    ) {
      let wrongAnswerDropArea = document.querySelector(".wrong-answer");
      wrongAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } 
    
    
    
    else if (
      y > 173 &&
      y < 460 &&
      x > 193 &&
      x < 355 &&
      document.getElementById("d1").style.display === "block" &&
      (eo.target.id === "sis" || eo.target.id === "famile")
    ) {
      let rightAnswerDropArea = document.getElementById("r1");
      rightAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } 
    else if (
      y > 175 &&
      y < 460 &&
      x > 20 &&
      x < 181 &&
      document.getElementById("d1").style.display === "block" &&
      (eo.target.id === "neighbour2" || eo.target.id === "stranger")
    ) {
      let wrongAnswerDropArea = document.getElementById("w1");
      wrongAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 173 &&
      y < 460 &&
      x > 193 &&
      x < 355 &&
      document.getElementById("d2").style.display === "block" &&
      (eo.target.id === "sis1" || eo.target.id === "famile1")
    ) {
      let rightAnswerDropArea = document.getElementById("r2");
      rightAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 175 &&
      y < 460 &&
      x > 20 &&
      x < 181 &&
      document.getElementById("d2").style.display === "block" &&
      (eo.target.id === "neighbour21" || eo.target.id === "stranger1")
    ) {
      let wrongAnswerDropArea = document.getElementById("w2");
      wrongAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      y > 212 &&
      y < 500 &&
      x > 71 &&
      x < 301 &&
      eo.target.id === "no"
    ) {
      let rightAnswerDropArea = document.querySelector(".right-answer2");
      rightAnswerDropArea.appendChild(eo.target);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else {
      wrongSound.play();
    }
  });
}

// game part 3 

let rightAnswer3 = document.querySelectorAll('.right3');

let wrongAnswer3 =document.querySelectorAll('.wrong3');


for (let i = 0; i < rightAnswer3.length; i++) {
  rightAnswer3[i].addEventListener('click' , (eo)=>{
    if (eo.target.classList.value === 'img1') {
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
      eo.target.classList.add('rigth-answer-effect');
      
    }
  })

  wrongAnswer3[i].addEventListener('click' ,(eo)=>{
    if (eo.target.classList.value === 'img2') {
      eo.target.classList.add('wrong-answer-effect');
      setTimeout(()=>{
        eo.target.classList.remove('wrong-answer-effect');
      },2000)
      wrongSound.play();
    }
  })
  
}



// let container = document.querySelectorAll(".container");
// document.onclick = function (e) {
//   let x = e.pageX;
//   let y = e.pageY;
//   // let y = e.pageY;
//   // let y = e.pageY - 50;
//   // let y = e.pageY

//   console.log(x,y);
// }
