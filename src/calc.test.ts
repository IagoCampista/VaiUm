import Calculadora from "./calculadora";

describe('funcionalidade Conferir Vai Um', () => {
    test('dois números com nao vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(2,2);
        //expectation
        expect (resultado).toBe(0);
    })
    test('dois números com vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(2,9);
        //expectation
        expect (resultado).toBe(1);
    })
})

