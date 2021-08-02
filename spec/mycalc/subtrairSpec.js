describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve subtrair dois numeros inteiros, 5 e 2, e retornar 3', function(){
		expect(myCalc.subtrair(5, 2)).toEqual(3);
	});

	it('Deve somar dois numeros em formato de texto, 2 e -4, e retornar 6', function(){
		expect(myCalc.subtrair('2', '-4')).toEqual(6);
	});

	it('Deve somar 2.5 e 1.5 e retornar 1.0', function(){
		expect(myCalc.subtrair(2.5, 1.5)).toEqual(1.0);
	});

	it('Deve somar 2.34 e 6.36 e retornar 4.02', function(){
		expect(myCalc.subtrair(2.34, 6.36)).toEqual(-4.02);
	});
});