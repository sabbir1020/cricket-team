const selectPlayer = document.getElementById("select-player");
// console.log(selectPlayer);
let players = [];
function selectedPlayer(element) {
  const playerName = element.parentNode.children[1].children[0].innerText;
  // const playerName = element.parentNode.children[1].children[0].innerText;
  console.log(playerName);
  if (players.length < 5) {
    players.push(playerName);
  } else {
    alert(" Already added 5 players");
  }
  selectPlayer.innerHTML = "";
  //   console.log(selectPlayer);
  for (const player of players) {
    const playerName = player;
    const li = document.createElement("li");
    li.innerText = playerName;
    selectPlayer.appendChild(li);
  }
}

// function enentvalue ()
document
  .getElementById("calculator-btn")
  .addEventListener("click", function () {
    const perAmountElement = document.getElementById("per-amount").value;
    perAmountElement.value = "";
    const perAmount = parseInt(perAmountElement);
    if (isNaN(perAmount)) {
      alert("Please enter your number");
      return;
    }
    const playerTotal = players.length;
    // const playerExpenses = perAmount * playerTotal;
    // multValue(perAmount, playerTotal);
    // setValue("total-cost", playerExpenses);
    const multi = multValue(perAmount, playerTotal);
    setValue("total-cost", multi);
  });
document
  .getElementById("total-calculate-btn")
  .addEventListener("click", function () {
    const perAmountElement = document.getElementById("per-amount").value;
    perAmountElement.value = "";
    const perAmount = parseInt(perAmountElement);
    const playerTotal = players.length;
    const perAmountAndPlayer = perAmount * playerTotal;
    const managerInputElement = document.getElementById("Manager-input").value;
    const managerInput = parseInt(managerInputElement);
    const coachInputElement = document.getElementById("coach-input").value;
    const coachInput = parseInt(coachInputElement);

    const total = managerInput + coachInput + perAmountAndPlayer;
    if (isNaN(total)) {
      alert("Please valid Number");
      return;
    }
    setValue("total", total);
    // console.log(total);
  });
