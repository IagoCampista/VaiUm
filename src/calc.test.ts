import Calculadora from "./calculadora";

describe('funcionalidade soma', () => {
    test('somar dois números', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.confereVaiUm(2,2);
        //expectation
        expect (resultado).toBe(0);
    })
})

