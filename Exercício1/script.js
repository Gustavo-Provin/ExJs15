// Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00]
const res = salarios.findIndex(salario)

function salario(valor) {
    return valor > 7500
}
document.write(res)

document.write('</br></br>')

// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

const res2 = salarios.filter(salarios2)

function salarios2(valor2) {
    return valor2 > 8000
}

document.write(res2)