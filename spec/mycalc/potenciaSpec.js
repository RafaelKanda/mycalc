describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve fazer 3 elevado a 3 e obter 27', function(){
		expect(myCalc.potencia(3, 3)).toEqual(27);
	});

	it('Deve fazer 5 elevado a 0 e obter 1', function(){
		expect(myCalc.potencia(5, 0)).toEqual(1);
	});

	it('Deve fazer 6 elevado a 1 e obter 6', function(){
		expect(myCalc.potencia(6, 1)).toEqual(6);
	});

	it('Deve fazer 2 elevado a 7 e obter 128', function(){
		expect(myCalc.potencia(2, 7)).toEqual(128);
	});

	it('Deve fazer 3 elevado a 3 em string e obter 27', function(){
		expect(myCalc.potencia('3', '3')).toEqual(27);
	});

});