const btnTry = document.getElementById('btntry');
let dashes = document.getElementById('dashes');
let textWords = document.getElementById('textWord');
const Aletter = document.getElementById('a');

Aletter.addEventListener('click' , putLetter)

const palavras = [
    'FLORIANOPOLIS',
    'CURITIBA',
    'SAO PAULO',
    'PORTO ALEGRE',
    'BRASILIA',
    'RIO DE JANEIRO',
    'MANAUS',
    'RECIFE',
    'BELO HORIZONTE',
    'goias'
]

btnTry.addEventListener('click', dashed)


function SorteiaPalavra(array) {
    const numeroSort = Math.floor(Math.random() * 10)
    return array[numeroSort]
}


const SortedWord = SorteiaPalavra(palavras)

const letters = SortedWord.length




function dashed ()  {

    for (i=0;i<=letters;i++) {

        const letter = SortedWord.charAt(i) 

        if (letter != " ") {

            dashes.textContent += "-"

        } else {
            dashes.textContent += " "
        }
    }
}


function putLetter () {


    for (i=0 ; i <= letters; i++){

        const Letter = SortedWord.charAt(i)
        
        if (Letter == Aletter.value) {

            textWords.textContent += "A"
        
        }
    }
}
