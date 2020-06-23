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

console.log(SoreteiaPalavra(palavras))







