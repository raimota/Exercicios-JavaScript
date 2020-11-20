btn[0].addEventListener("click", function () {
    let vTotCompra = Number.parseFloat(prompt("Digite o valor total da compra"));
    let parcela = Number.parseFloat(prompt("Digite a qtd de parcelas"));
    if (parcela == 0) {
        alert("Compra a vista")
    } else {
        if (parcela == 1) {
            alert(`A Compra foi parcela em 1x de ${vTotCompra}\nSem Juros`);
        } else {
            if (parcela == 2 || parcela == 3) {
                let c = ((vTotCompra * (100 + 3)) / 100) / parcela;
                let j = vTotCompra * 3 / 100;
                alert(`A Compra foi parcelada em ${parcela}x de R$ ${c.toFixed(2)}\nJuros de 3% em cima do valor R$ ${vTotCompra}\nJuros = R$ ${j.toFixed(2)}`);
            } else {
                if (parcela == 4) {
                    c = ((vTotCompra * (100 + 7)) / 100) / parcela;
                    let j = vTotCompra * 7 / 100;
                    alert(`A Compra foi parcelada em ${parcela}x de R$ ${c.toFixed(2)}\nJuros de 7% em cima do valor R$ ${vTotCompra}\nJuros = R$ ${j.toFixed(2)}`);
                } else {
                    alert("Só parcelamos em até 4x")
                }
            }
        }
    }
    console.log("Exercício 1 foi executado");
});
btn[1].addEventListener("click", function () {
    let n = Number.parseFloat(prompt("Digite um número para ver se ele é par ou ímpar"));
    if (n % 2 == 0) {
        alert(`O número ${n} é par`);
    } else {
        alert(`O número ${n} é ímpar`)
    }
    console.log("Exercício 2 foi executado");
});
btn[2].addEventListener("click", function () {
    let n1 = Number.parseFloat(prompt("Digite um número"));
    let n2 = Number.parseFloat(prompt("Digite outro número"));
    if (n1 == n2) {
        alert("Os números são iguais !")
    } else {
        if (n1 > n2) {
            alert(`O número ${n1} é maior do que ${n2} !`);
        } else {
            alert(`O número ${n2} é maior do que ${n1} !`);
        }
    }
    console.log("Exercício 3 foi executado");
});
btn[3].addEventListener("click", function () {
    let nota = 0;
    let acumulaNota = 0;
    let med = 0;
    let i;
    for (i = 0; i < 3; i += 1) {
        nota = Number.parseFloat(prompt(`Somente notas de 0 a 10.\nDigite ${i + 1}º nota:`));
        while (nota > 10 || nota < 0) {
            alert("Somente números de 0 a 10 ! Não sabe ler peste !");
            nota = Number.parseFloat(prompt(`Somente notas de 0 a 10.\nDigite ${i + 1}º nota:`));
        }   
        acumulaNota += nota
}
    med = acumulaNota / 3;
    if (med < 3) { alert(`Reprovado!\nMédia do aluno: ${med.toFixed(2)}`) }
    else {
        if (med < 6) { alert(`O aluno pode fazer a prova de recuperação\nMédia do aluno: ${med.toFixed(2)}`) }
        else { alert(`Aprovado!\nMédia do aluno: ${med.toFixed(2)}`) }
    }
    console.log("Exercício 4 foi executado");
});
btn[4].addEventListener("click", function () {
    let vProduto = Number.parseFloat(prompt("Digite o valor da compra"))
    let cod = Number.parseFloat(prompt("Digite o código"));
    if (cod == 1) {
        let desc = vProduto * 90 / 100;
        alert(`Valor produto R$ ${vProduto}\nModalidade de pagamento: À vista\nR$ ${vProduto - desc} de desconto\nValor a ser pago: R$ ${desc.toFixed(2)}`);
    } else {
        if (cod == 2) {
            let juros = vProduto * 102 / 100;
            alert(`Valor produto R$ ${vProduto}\nModalidade de pagamento: Débito\nR$ ${juros - vProduto} de juros\nValor a ser pago: R$ ${juros.toFixed(2)}`);
        } else {
            if (cod == 3) {
                let juros = vProduto * 107 / 100;
                alert(`Valor produto R$ ${vProduto}\nModalidade de pagamento: Crédito\nR$ ${juros - vProduto} de juros\nValor a ser pago: R$ ${juros.toFixed(2)}`);
            } else {
                alert("Código inválido!")
            }
        }
    }
    console.log("Exercício 5 foi executado");
});
btn[5].addEventListener("click", function () {
    let peso = Number.parseFloat(prompt("Digite o peso"));
    let alt = Number.parseFloat(prompt("Digite a altura"));
    let sexo = prompt(("Sexo: Masculino ou Feminino? Digita ai [M/F]"));
    imc(peso, alt, sexo.substring(0, 1).toUpperCase());
    console.log("Exercício 6 foi executado");
});
btn[6].addEventListener("click", function () {
    let sal = Number.parseFloat(prompt("Digite o salário"));
    iRenda(sal);
    console.log("Exercício 7 foi executado");
});
btn[7].addEventListener("click", function () {
    let n1 = Number.parseFloat(prompt("Digite o 1º número"));
    let n2 = Number.parseFloat(prompt("Digite o 2º número"));
    let cod = Number.parseFloat(prompt("Digite o código da operação"));
    calculo(n1, n2, cod);
    console.log("Exercício 8 foi executado");
});