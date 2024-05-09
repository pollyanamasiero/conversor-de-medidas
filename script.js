function converter() {
    let num = parseFloat(document.getElementById('num').value)
    let uni = document.getElementById('uni').value
    let res = document.getElementById('res')

    let mm = num * 1000
    let cm = num * 100
    let dm = num * 10
    let dam = num / 10
    let hm = num / 100
    let km = num / 1000

    switch (uni) {
        case '1':
            res.innerHTML = `<p>Resultado: ${num}m = ${mm} milímetros.</p>`
            break;
        case '2':
            res.innerHTML = `<p>Resultado: ${num}m = ${cm} centímetros.</p>`
            break;
        case '3':
            res.innerHTML = `<p>Resultado: ${num}m = ${dm} decímetros.</p>`
            break;
        case '4':
            res.innerHTML = `<p>Resultado: ${num}m = ${dam} decâmetros.</p>`
            break;
        case '5':
            res.innerHTML = `<p>Resultado: ${num}m = ${hm} hectômetros.</p>`
            break;
        case '6':
            res.innerHTML = `<p>Resultado: ${num}m = ${km} quilômetros.</p>`
            break;
        default:
            res.innerHTML = `<p>Escolha uma das opções acima.</p>`
            break;
    }
}