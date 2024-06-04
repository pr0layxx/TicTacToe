let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let rstBttn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let newGameBttn = document.querySelector(".newGm");
let msg = document.querySelector(".newGm");

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 === true) {
      //player0
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinnner();
  });
});

const disableBttn = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBttn = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const msgWinner = (winner) => {
  msgContainer.classList.remove("hide");
  disableBttn();
  msg.innerText = `Congratulation! ${winner} wins!`;
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const rstGm = () => {
  for (const box of boxes) {
    enableBttn();
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const checkWinnner = () => {
  for (let pattern of winPatterns) {
    let pstnValue1 = boxes[pattern[0]].innerText;
    let pstnValue2 = boxes[pattern[1]].innerText;
    let pstnValue3 = boxes[pattern[2]].innerText;

    if (pstnValue1 != "" && pstnValue2 != "" && pstnValue3 != "") {
      if (pstnValue1 === pstnValue2 && pstnValue2 === pstnValue3) {
        console.log("winner is", pstnValue1);
        msgWinner(pstnValue1);
      }
    }
  }
};
rstBttn.addEventListener("click",rstGm);
newGameBttn.addEventListener("click",rstGm);