describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve fazer raíz quadrada de 4', function(){
		expect(myCalc.radiciacao(4, 2)).toEqual(2);
	});

	it('Deve fazer raíz cúbica de 27', function(){
		expect(myCalc.radiciacao(27, 3)).toEqual(3);
	});

	it('Deve negar entrada de zero como radiciação', function(){
		expect(myCalc.radiciacao(27, 0)).toEqual("Error");
	});

	it('Deve fazer raíz cúbica de 27 entrada em string', function(){
		expect(myCalc.radiciacao('27', '3')).toEqual(3);
	});

});