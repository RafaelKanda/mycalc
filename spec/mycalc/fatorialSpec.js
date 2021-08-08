describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve obter fatorial de 1', function(){
		expect(myCalc.fatorial(1)).toEqual(1);
	});

	it('Deve obter fatorial de 5', function(){
		expect(myCalc.fatorial(5)).toEqual(120);
	});

	it('Deve obter fatorial de 5 em string', function(){
		expect(myCalc.fatorial('5')).toEqual(120);
	});

	it('Deve obter fatorial de 0', function(){
		expect(myCalc.fatorial(0)).toEqual(1);
	});

	it('Deve negar fatorial negativo', function(){
		expect(myCalc.fatorial(-6)).toEqual("Error");
	});

	it('Deve negar fatorial com decimal', function(){
		expect(myCalc.fatorial(5.6)).toEqual("Error");
	});

});