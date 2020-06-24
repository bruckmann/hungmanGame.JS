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


function SoreteiaPalavra(array) {
    const numeroSort = Math.floor(Math.random() * 10)
    return array[numeroSort]
}


const SortedWord = SoreteiaPalavra(palavras)
window.onload = Dashes()

function Dashes() {
    const letters = SortedWord.lenght
    for (i=0;i<letters;i++) {
    let letter = SortedWord.charAt(i)

        if (letter != " ") {
            dashes.innerHTML += "-"
        } else {
            dashes.innerHTML += " "
        }
    }
}




