const searchParams = new URLSearchParams(window.location.search);
let playerOne = "";
let playerTwo = "";
let winnerresult = "";
let gamehistory = [];
let getfinllywiningcondition = [];
let GameDraw = "";
var  gstep = [];
console.log(gstep)

let matchhistory = "";
let Gamesteps = [];
console.log(Gamesteps);
let playOne = [];
console.log(playOne);
let playTwo = [];
console.log(playTwo);

// console.log(searchParams);

var a = searchParams.has("P1");
var b = searchParams.has("P2");
// console.log(a)
// console.log(b)

if (searchParams.has("P1") && searchParams.has("P2")) {
  playerOne = searchParams.get("P1");
  playerTwo = searchParams.get("P2");
}

let boxes = document.querySelectorAll(".box"); /*all clicablebox*/
// console.log(boxes)
let resetbtn = document.querySelector("#reset");
let massage = document.querySelector("#msg"); /*Show Game Result on screen */
let NewGame = document.querySelector("#ngb");
let altcontainer = document.querySelector(".result");
let turno = true; /* playerO , playerX*/
let count = 0; /* To track Draw*/
// let clearData = document.getElementById("clearData")

const wincondition = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
let fullsteps={}
boxes.forEach((clickbox, index, boxes) => {
  // console.log(clickbox,index,boxes)
  clickbox.addEventListener("click", () => {
    Gamesteps.push(clickbox);
    // console.log( Gamesteps);
    gstep.push(Gamesteps);
    // gstep = Object.assign({}, Gamesteps)
    // console.log(gstep)
    
    // for(let i = 0;i<Gamesteps.length;i++){
    //   fullsteps[i]=Gamesteps[i]

    // }
    if (turno) {
      clickbox.innerHTML = `${"O"} <span style="font-size: 10px;">${playerOne}</span>`;
      // playOne.push(clickbox.innerHTML.charAt(0), );
       playOne.push(clickbox,);
      // console.log(playOne);

      turno = false;
    } else {
      clickbox.innerHTML = `${"X"} <span style="font-size: 10px;">${playerTwo}</span>`;
      // playTwo.push(clickbox.innerHTML.charAt(0),);
       playTwo.push(clickbox,);
      // console.log(playTwo);
      turno = true;
    }

    /* let Gamest=Object.keys(clickbox.innerHTML)
    console.log(Gamest)
    Gamest.push(typeof clickbox)
    console.log(Gamest);
    Gamest.push(typeof clickbox.id)
    console.log(Gamest);
    Gamest.push(`${clickbox.id}`)
    console.log(Gamest);
    Gamest.push(clickbox.innerHTML.length)  
    console.log(Gamest);
    Gamest.push(clickbox.innerHTML.charAt(0))
    console.log(Gamest);*/

    clickbox.disabled = true;
    count++;
    //  console.log(count)

    let isWinner = winner();

    // console.log(isWinner)

    if (count === 9 && !isWinner) {
      // GameDraw =  `Game was a Draw.`
      // GameDraw = Gamesteps;
      // console.log(GameDraw);

      gameDraw();
    }
  });
});

const ResetGame = () => {
  turno = true;
  count = 0;
  enableBoxes();
  altcontainer.classList.add(".result");
  msg.innerText = "Game start";
};

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
  msg.innerText = `Congratulations, Winner is ${
    !turno ? playerOne : playerTwo
  }`;
  winnerresult = `${!turno ? playerOne : playerTwo}`;
  altcontainer.classList.remove(".result");

  disableBoxes();
};

const winner = () => {
  for (let condition of wincondition) {
    // Gamesteps.push(condition)
    // Gamesteps.forEach((steps)=>{console.log(steps)})
    // // console.log(Gamesteps)

    // console.log(condition[0], condition[1], condition[2]);
    // console.log(boxes[condition[0]],boxes[condition[1]],boxes[condition[2]],)
    // console.log(boxes[condition[0]].innerHTML,boxes[condition[1]].innerHTML,boxes[condition[2]].innerHTML,)

    let velueof_position_0ne = boxes[condition[0]].innerHTML;
    let velueof_position_two = boxes[condition[1]].innerHTML;
    let velueof_position_three = boxes[condition[2]].innerHTML;

    if (
      velueof_position_0ne != "" &&
      velueof_position_two != "" &&
      velueof_position_three != ""
    ) {
      if (
        velueof_position_0ne === velueof_position_two &&
        velueof_position_two === velueof_position_three
      ) {
        condin = [
          boxes[condition[0]],
          boxes[condition[1]],
          boxes[condition[2]], 
        ];

        getfinllywiningcondition.push(condin)
        // Object.assign({}, condin);
        

        showWinner(velueof_position_0ne);

        if (window.localStorage.getItem("matchhistory")) {
          let matchhistory = JSON.parse(
            window.localStorage.getItem("matchhistory")
          );

          const date = new Date();

          let gameObj = {
            match: {
              p1: playerOne,
              p2: playerTwo,
              mwinner: winnerresult,
              date: date,
              FGstep: gstep,
              play1: playOne,
              play2: playTwo,
              winnerposition: getfinllywiningcondition,
              DRAW: GameDraw,
            },
          };

         

          matchhistory.push(gameObj);
          window.localStorage.setItem(
            `matchhistory`,
            JSON.stringify(matchhistory)
          );
          console.log(matchhistory);
        } else {
          let gamehistory = [];
          const date = new Date();

          let gameObj = {
            match: {
              p1: playerOne,
              p2: playerTwo,
              mwinner: winnerresult,
              date: date,
              FGstep: fullsteps,
              play1: playOne,
              play2: playTwo,
              winnerposition: getfinllywiningcondition,
              DRAW: GameDraw,
            },
          };

          //matchhistory.push()
          gamehistory.push(gameObj);
          window.localStorage.setItem(
            `matchhistory`,
            JSON.stringify(gamehistory)
          );
        }
        console.log(getfinllywiningcondition)
        console.log(gamehistory)
      }
    }
  }
};

NewGame.addEventListener("click", ResetGame);
resetbtn.addEventListener("click", ResetGame);
function clearstorage(){
window.localStorage.removeItem("matchhistory")
}