var myCalc = {
	somar: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 + n2;

		return Math.round(resultado*100) / 100;
	},

	subtrair: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		var resultado = n1 - n2;

		return Math.round(resultado*100) / 100;
	},

	dividir: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		if(n2 == 0){
			return 'Não é possível dividir por 0';
		}
		else{
			var resultado = n1 / n2;

			return Math.round(resultado*100) / 100;
		}
		
	},

	multiplicar: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		var resultado = n1 * n2;

		return Math.round(resultado*100) / 100;
	},

	potencia: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		var resultado;

		resultado = n1 ** n2;

		return Math.round(resultado*100) / 100;
	},

	radiciacao: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		var resultado;

		if(n2 == 0){
			return "Error";
		}
		else{
			resultado = n1 ** (1 / n2);
			return Math.round(resultado*100) / 100;			
		}
	},

	fatorial: function(n1){
		n1 = parseFloat(n1);
		var resultado = 1;
		if(n1 < 0){
			return "Error";
		}
		else if(n1 % 1 != 0){
			return "Error";
		}
		else if(n1 == 0){
			return 1;
		}
		else{
			for(i = 1; i < n1+1; i++){
				resultado = resultado * i;
			}
			return Math.round(resultado*100) / 100;
		}
	}

}

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = myCalc;
}