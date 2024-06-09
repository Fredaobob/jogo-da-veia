var one = "X";
var two = "O";
var jogando = true;
var counter = 0;

var jogador1 = one;
var jogador2 = two;

var cells = document.querySelectorAll("[data-cell]");
console.log(cells);

var matriz = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function handleClick(event) {
  if (!jogando) return; // Se o jogo já acabou, não faz nada

  var cell = event.target;
  var cellID = cell.id;
  var parts = cellID.split("-");
  var row = parseInt(parts[1]);
  var col = parseInt(parts[2]);

  if (matriz[row][col] !== "") {
    // Se a célula já estiver preenchida, não faz nada
    return;
  }

  if (counter % 2 === 0) {
    matriz[row][col] = jogador1;
    cell.innerHTML = jogador1;
  } else {
    matriz[row][col] = jogador2;
    cell.innerHTML = jogador2;
  }

  if (checkWin(row, col)) {
    alert("Jogador " + (counter % 2 === 0 ? jogador1 : jogador2) + " venceu!");
    jogando = false;
  }

  counter++;

  if (counter === 9 && jogando) {
    alert("Empate!");
    jogando = false;
  }

  console.log(matriz);
}

// Função para verificar condições de vitória
function checkWin(row, col) {
  // Verifica linha
  if (
    matriz[row][0] === matriz[row][1] &&
    matriz[row][1] === matriz[row][2] &&
    matriz[row][0] !== ""
  ) {
    return true;
  }

  // Verifica coluna
  if (
    matriz[0][col] === matriz[1][col] &&
    matriz[1][col] === matriz[2][col] &&
    matriz[0][col] !== ""
  ) {
    return true;
  }

  // Verifica diagonal principal
  if (
    matriz[0][0] === matriz[1][1] &&
    matriz[1][1] === matriz[2][2] &&
    matriz[0][0] !== ""
  ) {
    return true;
  }

  // Verifica diagonal secundária
  if (
    matriz[0][2] === matriz[1][1] &&
    matriz[1][1] === matriz[2][0] &&
    matriz[0][2] !== ""
  ) {
    return true;
  }

  return false;
}

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

