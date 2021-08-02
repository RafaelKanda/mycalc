describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve dividir dois numeros inteiros, 10 e 2, e retornar 5', function(){
		expect(myCalc.dividir(10, 2)).toEqual(5);
	});

	it('Deve dividir dois numeros em formato de texto, 9 e -3, e retornar -3', function(){
		expect(myCalc.dividir('9', '-3')).toEqual(-3);
	});

	it('Deve dividir 5 e 0 e retornar error', function(){
		expect(myCalc.dividir(5, 0)).toEqual('Não é possível dividir por 0');
	});

	it('Deve dividir 4.5 e 1.5 e retornar 3.0', function(){
		expect(myCalc.dividir(4.5, 1.5)).toEqual(3.0);
	});

	it('Deve dividir 2.5 e 2.0 e retornar 1.25', function(){
		expect(myCalc.dividir(2.5, 2.0)).toEqual(1.25);
	});

	

});