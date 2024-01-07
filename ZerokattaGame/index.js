const firstpyaler = document.getElementById("player_one");
const secondpyaler = document.getElementById("player_two");
// let clearData = document.getElementById("clearData")

function startGame() {
  var plya1 = firstpyaler.value;
  var plya2 = secondpyaler.value;

  if (firstpyaler.value !== "" && secondpyaler.value !== "") {
    console.log(plya1);
    console.log(plya2);
    window.location.href = `/ZerokattaGame/game.html?P1=${plya1}&P2=${plya2}`;
  } else {
    alert("plese enter pyar name");
  }}
  function clearstorage(){
    window.localStorage.removeItem("matchhistory")
    }