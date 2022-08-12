function finDeSemana (dia){
switch (dia) {	
	case 'viernes':
    	console.log('buen finde');
		break;
	case 'lunes':
    	console.log('buena semana');
	break;
    default:
    	console.log('buen dia')
	}
}
console.log(finDeSemana("miercoles"))