const words = [
    {
      "name": "Florianopolis",
      "tip": "Cidade"
    },
    {
      "name": "Santa Catarina",
      "tip": "Estado"
    },
    {
      "name": "Brasil",
      "tip": "País"
    },
  ] 
  
  function startGame() {
    let drawnNumber; 
    let drawnWord; 
   
    drawnNumber = Math.floor(Math.random() * (3 - 0)) + 0;
    drawnWord = words[drawnNumber].name
  
    console.log(drawnNumber)
    returnTraces(drawnWord)
  
    function returnTraces(word) {
      let traces = "";
      let element = document.getElementById("word");
  
      for (i = 0;i < word.length;i++) {
        element.innerHTML += `<div id='letter${i}'>${drawnWord.charAt(i)}</div>`;
        document.getElementById(`letter${i}`).style.visibility = "hidden";
  
          if (word.charAt(i) != " ") {
              traces += "-";
          } else {
              traces += " ";
          }
      }
  
      document.getElementById("result").innerHTML = traces;
  }
    
    function matchLetter(event) {
      const value = event.target.value;
      const wordLength = drawnWord.length; 
  
      for (i = 0;i < wordLength;i++) {
        let letter = document.getElementById(`letter${i}`).textContent;
        let letterElement = document.getElementById(`letter${i}`);
        
        letter = letter.toUpperCase();
  
        if(value == letter){
          letterElement.style.visibility = "visible";
        }
    }
    }
    
    let buttons = document.querySelectorAll("button[name=letter]");
    
    for(button of buttons) {
      button.addEventListener("click", matchLetter)
    }  
  };
  
  