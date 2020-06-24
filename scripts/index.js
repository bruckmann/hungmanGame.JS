const btnTry = document.getElementById('btntry');
let dashes = document.getElementById('dashes');
let letraa = document.getElementById('letraa')
const letraA = document.getElementById('a')

const palavras = [
    'Florianópolis',
    'Curitiba',
    'São paulo',
    'Porto Alegre',
    'Brasilia',
    'Rio de Janeiro',
    'Manaus',
    'Recife',
    'Belo Horizonte',
    'Goias'
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
            dashes.innerHTML += " "
        }

    }
}


function palavras(){
    
    const palavra = SortedWord.charAt(i)
    
    for (i=0 ; i <= letters; i++){
    if (palavra == letraA.value){
        letraa.innerHTML += "A"
    }
    }
}
