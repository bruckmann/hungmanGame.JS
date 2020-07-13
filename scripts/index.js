const words = [
  {
    "name": "Florianopolis",
    "tip": "Cidade"
  },
  {
    "name": "Pernambuco",
    "tip": "Estado"
  },
  {
    "name": "Brasil",
    "tip": "País"
  },
  {
    "name": "Carteira",
    "tip": "Objeto"
  },
  {
    "name": "Cavalo",
    "tip": "Animal"
  },
  {
    "name": "Cachorro",
    "tip": "Animal"
  },
  {
    "name": "Mesa",
    "tip": "Objeto"
  },
  {
    "name": "Banana",
    "tip": "Fruta"
  },
  {
    "name": "Mercado",
    "tip": "Lugar"
  },
  {
    "name": "Filipe",
    "tip": "Nome"
  },
  {
    "name": "Parana",
    "tip": "Estado"
  },
  {
    "name": "Canada",
    "tip": "País"
  },
  {
    "name": "Cadeira",
    "tip": "Móvel"
  }
]; 
let buttonRestart = document.getElementById("restart");
let tip = document.getElementById("tip");

buttonRestart.style.display = "none";
tip.style.display = "none";

function startGame() {
  let drawnNumber; 
  let drawnWord; 

  let correctLetters = 0;
  let wrongLetters = 0;
  let hit = false;

  let tip = document.getElementById("tip");
  let buttonStart = document.getElementById("start");
  let buttonRestart = document.getElementById("restart");

  let cabeca = document.getElementById("man0");
  let corpo = document.getElementById("man1");
  let braco1 = document.getElementById("man2");
  let braco2 = document.getElementById("man3");
  let perna1 = document.getElementById("man4");
  let perna2 = document.getElementById("man5");

  cabeca.style.display = "none";
  corpo.style.display = "none";
  braco1.style.display = "none";
  braco2.style.display = "none";
  perna1.style.display = "none";
  perna2.style.display = "none";

  buttonStart.style.display = "none";
  buttonRestart.style.display = "inline"
  tip.style.display = "inline";
  
  drawnNumber = Math.floor(Math.random() * (13 - 0)) + 0;
  drawnWord = words[drawnNumber].name;

  returnTraces(drawnWord);

  function returnTraces(word) {
    let traces = "";
    let element = document.getElementById("word");

    drawnWord = drawnWord.toUpperCase();

    for (i = 0;i < word.length;i++) {
      element.innerHTML += `<div id='letter${i}'>${drawnWord.charAt(i)}</div>`;
      document.getElementById(`letter${i}`).style.visibility = "hidden";

        if (word.charAt(i) != " ") {
            traces += "-";
        } else {
            traces += " ";
        };
    };

    document.getElementById("result").innerHTML = traces;
  };
  
  function matchLetter(event) {
    const value = event.target.value;
    const wordLength = drawnWord.length; 
    let lettersMatched = 0;

    event.target.style.visibility = "hidden";

    for (i = 0;i < wordLength;i++) {
      let letter = document.getElementById(`letter${i}`).textContent;
      let letterElement = document.getElementById(`letter${i}`);
      
      letter = letter.toUpperCase();

      if(value == letter){
        letterElement.style.visibility = "visible";
        hit = true;
        correctLetters++
        lettersMatched++
      }
      else if(lettersMatched == 0){
        hit = false;
      };
    };

    if(hit == false){
      document.getElementById(`man${wrongLetters}`).style.display = "inline";

      wrongLetters++
    };
  
    if(wrongLetters == 6){
      setTimeout(() => { 
          window.alert("Game over \n a palavra era: " + drawnWord); 
          location.reload();
        }, 200);
    };

    if(correctLetters == wordLength) {
      setTimeout(() => {  
        window.alert("Parabéns você ganhou");
        location.reload();
      }, 200);
    };
  };

  function restartGame() {
    location.reload();
  };

  let buttons = document.querySelectorAll("button[name=letter]");
  
  for(button of buttons) {
    button.addEventListener("click", matchLetter);
  };
  
  tip.addEventListener("click", () => {
    window.alert(words[drawnNumber].tip);
  });

  buttonRestart.addEventListener("click", restartGame);
};