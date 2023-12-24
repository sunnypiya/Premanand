let boxes = document.querySelectorAll(".box"); /*all clicablebox*/
let resetbtn = document.querySelector("#reset");
let massage = document.querySelector("#msg") /*Show Game Result on screen */
let NewGame= document.querySelector("#ngb") 
let altcontainer = document.querySelector(".result")
let turno = true; /* playerO , playerX*/
let count = 0; /* To track Draw*/


const wincondition = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ResetGame = () => {
  turno = true;
  count = 0; 
 enableBoxes();
  altcontainer.classList.add(".result");
  msg.innerText = "Game start"

};

boxes.forEach((clickbox) => {
  clickbox.addEventListener("click", () => {
    if ( turno) {
      clickbox.innerHTML = "o";
      turno = false;
    } else {
      clickbox.innerHTML = "x";
      turno = true;
    }
   
    clickbox.disabled = true;
    count++

    let isWinner =  winner();

if (count === 9 && !isWinner) {
  gameDraw();
}
  });
});

const gameDraw = () => {
msg.innerText = `Game was a Draw.`;
altcontainer.classList.remove(".result");
disableBoxes();
};

const disableBoxes = () => {
    for (let clickbox of boxes) {
      clickbox.disabled = true;
    }
};

const enableBoxes = () => {
    for (let clickbox of boxes) {
        clickbox.disabled = false;
        clickbox.innerText = "";
    }
  };

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    altcontainer.classList.remove(".result");
    disableBoxes();
  };

function winner() {
  for (let condition of wincondition) {
    console.log(condition[0], condition[1], condition[2]);
    // console.log(boxes[condition[0]],boxes[condition[1]],boxes[condition[2]],)
    // console.log(boxes[condition[0]].innerHTML,boxes[condition[1]].innerHTML,boxes[condition[2]].innerHTML,)

    let velueof_position_0ne = boxes[condition[0]].innerHTML;
    let velueof_position_two = boxes[condition[1]].innerHTML;
    let velueof_position_three = boxes[condition[2]].innerHTML;

    if (
      velueof_position_0ne != "" && velueof_position_two != "" && velueof_position_three != "") {
      if (
        velueof_position_0ne === velueof_position_two && velueof_position_two === velueof_position_three
      ) {
        showWinner(velueof_position_0ne);
        return true;
      }
    }
  }
}

NewGame.addEventListener("click",ResetGame);
resetbtn.addEventListener("click", ResetGame);

// let ab = [3, 8, 4, 6, 5, 4];
// ab.boxEach((b, i, ab) => {
//   console.log(b, i, ab);
// });
