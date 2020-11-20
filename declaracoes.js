const btn = document.getElementsByTagName("button");
const iRenda = function (sal) {
    let imposto;
    let result;
    if (sal > 3582) {
        imposto = sal * (27.5) / 100;
        result = alert(`Imposto de Renda: R$ ${imposto.toFixed(2)}`);
        return result;
    } else {
        if (sal > 2866 && sal <= 3582) {
            imposto = sal * (22.5) / 100;
            result = alert(`Imposto de Renda: R$ ${imposto.toFixed(2)}`);
            return result;
        } else {
            if (sal > 2150 && sal <= 2866) {
                imposto = sal * (15) / 100;
                result = alert(`Imposto de Renda: R$ ${imposto.toFixed(2)}`);
                return result;
            } else {
                if (sal > 1434 && sal <= 2150) {
                    imposto = sal * (7.5) / 100;
                    result = alert(`Imposto de Renda: R$ ${imposto.toFixed(2)}`);
                    return result;
                } else {
                    result = alert("Isento de imposto de renda");
                }
            }
        }
    }
};
const calculo = function (n1, n2, cod) {
    if (cod == 1) {
        let result = alert(`${n1} + ${n2} = ${n1 + n2}`);
        return result;
    } else {
        if (cod == 2) {
            let result = alert(`${n1} - ${n2} = ${n1 - n2}`);
            return result;
        }
        else {
            if (cod == 3) {
                let result = alert(`${n1} x ${n2} = ${n1 * n2}`);
                return result;
            } else {
                if (cod == 4) {
                    let result = alert(`${n1} / ${n2} = ${n1 / n2}`);
                    return result;
                } else {
                    let result = alert(`Código Inválido`);
                    return result;
                }
            }
        }
    }
};
const imc = function (peso, alt,sexo) {
    let result = peso/(alt*alt);
    if (sexo == 'F' && result > 32.3) {
        alert(`IMC = ${result.toFixed(2)}\nObeso`);
    } else {
        if (sexo == 'F' && result <= 32.3 && result > 27.3) {
            alert(`IMC = ${result.toFixed(2)}\nAcima do peso ideal`);
        } else {
            if (sexo == 'F' && result <= 27.3 && result > 25.8) {
                alert(`IMC = ${result.toFixed(2)}\nMarginalmente acima do peso`);
            } else {
                if (sexo == 'F' && result <= 25.8 && result >= 19.1) {
                    alert(`IMC = ${result.toFixed(2)}\nPeso normal`);
                } else {
                    if (sexo == 'F' && result < 19.1) {
                        alert(`IMC = ${result.toFixed(2)}\nAbaixo do peso`);
                    } else {
                        if (sexo == 'M' && result > 31.1) {
                            alert(`IMC = ${result.toFixed(2)}\nObeso`);
                        } else {
                            if (sexo == 'M' && result <= 31.1 && result > 27.8) {
                                alert(`IMC = ${result.toFixed(2)}\nAcima do peso ideal`);
                            } else {
                                if (sexo == 'M' && result <= 27.8 && result > 26.4) {
                                    alert(`IMC = ${result.toFixed(2)}\nMarginalmente acima do peso`);
                                } else {
                                    if (sexo == 'M' &&result >= 20.70 && result <= 26.40) {
                                        alert(`IMC = ${result.toFixed(2)}\nPeso normal`);
                                    } else {
                                        if (sexo == 'M' && result < 20.70) {
                                            alert(`IMC = ${result.toFixed(2)}\nAbaixo do peso`);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};