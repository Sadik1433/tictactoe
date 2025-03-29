let btnElement = document.querySelectorAll(".game-btn");
let reset = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let turn0 = false;

let patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
];

const resetGame = () => {
    turn0 = true;
    enabledbtn();
  msgContainer.classList.add("hide");
  btn.classList.remove('clickedx');
  btn.classList.remove('clickedy');
};

btnElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn0) {
      btn.innerText = "❌";
      btn.classList.add('clickedx');
      turn0 = false;
    } else {
      btn.innerText = "⭕";
      btn.classList.add('clickedy');
      turn0 = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const disabledbtn = () => {
  for (let btn of btnElement) {
    btn.disabled = true;    
  }
};

const enabledbtn = () => {
    for (let btn of btnElement) {
      btn.disabled = false;
      btn.innerText="";
      btn.classList.remove('clickedx');
      btn.classList.remove('clickedy');
    }
  };

const showwinner = (winner) => {
  msgContainer.innerText = `${winner} is the winner 💖`;
  msgContainer.classList.remove("hide");
  disabledbtn();
};

const checkWinner = () => {
  let winner = null;
  patterns.forEach((pattern) => {
    let [a, b, c] = pattern;
    if (
      btnElement[a].innerText === btnElement[b].innerText &&
      btnElement[a].innerText === btnElement[c].innerText &&
      btnElement[a].innerText !== ""
    ) {
      winner = btnElement[a].innerText;
      showwinner(winner);
    }
  });
};

newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
