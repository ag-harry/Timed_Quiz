let startBtn = document.getElementById('startBtn');
let hpContainer = document.querySelector(".container");
let questionCntr = document.querySelector(".questionCntr");


startBtn.addEventListener("click", startGame);

function startGame() {
  alert ("Question_1");
  hpContainer.style.display = "none";
  questionCntr.classList.remove("questions");
}

// update question answers
// logic r anser wr answer

