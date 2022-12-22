import Calculadora from "./calculadora";

describe('funcionalidade Conferir Vai Um', () => {
    test('dois números sem vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(1,3);
        //expectation
        expect (resultado).toBe(0);
    })
    test('dois números com vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(4,9);
        //expectation
        expect (resultado).toBe(1);
    })
    test('número com mais de um digito sem vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(10,19);
        //expectation
        expect (resultado).toBe(0);
    })
    test('número com mais de um digito com vai um', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(90,19);
        //expectation
        expect (resultado).toBe(1);
    })
    
})

