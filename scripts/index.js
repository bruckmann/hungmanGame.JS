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
  ]; 
  
  function startGame() {
    let drawnNumber; 
    let drawnWord; 
    let correctLetters = 0;
    let wrongLetters = 0;
    let hit = false;
    let tip = document.getElementById("tip");

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
   
    drawnNumber = Math.floor(Math.random() * (3 - 0)) + 0;
    drawnWord = words[drawnNumber].name;
  
    console.log(drawnNumber)
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

      for (i = 0;i < wordLength;i++) {
        let letter = document.getElementById(`letter${i}`).textContent;
        let letterElement = document.getElementById(`letter${i}`);
        
        letter = letter.toUpperCase();
  
        if(value == letter){
          letterElement.style.visibility = "visible";
          event.target.style.visibility = "hidden";
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
        console.log("Game over")
      };

      if(correctLetters == wordLength) {
        console.log("Parabéns você ganhou")
      };

    };
 
    let buttons = document.querySelectorAll("button[name=letter]");
    
    for(button of buttons) {
      button.addEventListener("click", matchLetter)
    };
    
    tip.addEventListener("click", () => {
      console.log(words[drawnNumber].tip)
    });
  };
  
  