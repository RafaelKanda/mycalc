describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve multiplicar dois numeros inteiros, 3 e 4, e retornar 12', function(){
		expect(myCalc.multiplicar(3, 4)).toEqual(12);
	});

	it('Deve multiplicar dois numeros em formato de texto, 5 e -3, e retornar -15', function(){
		expect(myCalc.multiplicar('5', '-3')).toEqual(-15);
	});

	it('Deve multiplicar 1.5 e 3.5 e retornar 5.25', function(){
		expect(myCalc.multiplicar(1.5, 3.5)).toEqual(5.25);
	});

	it('Deve multiplicar 6.4 e 2.3 e retornar 14.72', function(){
		expect(myCalc.multiplicar(6.4, 2.3)).toEqual(14.72);
	});

});