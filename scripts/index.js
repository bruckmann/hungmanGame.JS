const btnTry = document.getElementById('btntry');
let dashes = document.getElementById('dashes');
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
