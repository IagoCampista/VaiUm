/*
As crianças aprendem a adicionar multi-dígitos da direita para a esquerda, um dígito por vez. 
Muitas acham o "vai um", operação aonde o 1 é carregado para a posição seguinte, um desafio significativo. 
Seu trabalho é dado dois números inteiros positivos, contar o número de operações de "vai um" para adição. 
Entrada: dois valores inteiros positivos. Retorno: quantidade de "vai um" da soma. 
Exemplos: Entrada: 123 456 Retorno: 0 "vai um"; 
Entrada: 555 555 Retorno: 3 "vai um"; 
Entrada: 123 594 Retorno: 1 "vai um"; 
Adaptado a partir do problema "Carry" do livro Programming Challenges - The Programming Contest Training 
Manual_Steven S. Skiena, Miguel A. Revilla (Springer 2003)


var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);
*/
class Calculadora {
    confereVaiUm(num1:number, num2:number) {
        let numstring1 = num1.toString().split('');
        let num1digitos = numstring1.map(Number);
        let numstring2 = num2.toString().split('');
        let num2digitos = numstring2.map(Number);
        
        
        let i=0;
        let result =0, aux=0;

        for (i=num1digitos.length-1; i>=0; i--){
            console.log(num1digitos, num1digitos.length, num2digitos, num2digitos.length);
            if(num1digitos[i]+num2digitos[i]+aux >= 10){
                console.log("aux: "+aux);
                console.log("soma: "+num1digitos[i]+num2digitos[i]+aux);
                
                result++;
                aux = num1digitos[i]+num2digitos[i] - 10;
            }
        } 
        
        return (result)
    }
} 
export default Calculadora;