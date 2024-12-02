console.log("Ajuda");
function calcularMedia() {
    
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);

    
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerText = " Insira notas válidas!";
        return;
    }

    
    const media = (n1 + n2) / 2;

    
    let resultado;
    if (media === 10) {
        resultado = "Aprovado com Distinção";
    } else if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    
    document.getElementById("resultado").innerText = `Média: + {media.toFixed(1)} - ${resultado}`;
}
