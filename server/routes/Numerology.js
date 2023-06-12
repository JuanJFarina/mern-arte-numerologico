function esVocal(letra) {
  letra = letra.toLowerCase();
  return ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'].includes(letra);
}

/*
letrasANumeros recibe un string nombre y un flag que acepta por valores
0 = todas las letras
1 = solo vocales
2 = solo consonantes
finalmente retorna un array de numeros correspondientes a las letras solicitadas
*/

function letrasANumeros(temp, flag) {
  const charMap = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9,
    á: 1, é: 5, í: 9,
    ó: 6, ú: 3, ü: 3,
    ñ: 5
  };

  temp = temp.toLowerCase();
  const numeros = [];
  for (let x = 0; x < temp.length; x++) {
    if(flag === 0) {
        const char = temp.charAt(x);
        const numero = charMap[char];
        if (numero) {
            numeros.push(numero);
        }
    }
    else if(flag === 1) {
        if(esVocal(temp.charAt(x))) {
            const char = temp.charAt(x);
            const numero = charMap[char];
            if (numero) {
                numeros.push(numero);
            }
        }
    }
    else if(flag === 2) {
        if(!esVocal(temp.charAt(x))) {
            const char = temp.charAt(x);
            const numero = charMap[char];
            if (numero) {
                numeros.push(numero);
            }
        }
    }
  }
  return numeros;
}

// recibe un array de numeros para sumar y retorna el numero final

function sumar(array) {
    return array.reduce((accumulator, number) => accumulator + number, 0);
}

//recibe un numero y lo reduce a un solo digito

function reducir(number) {
  while (number >= 10) {
    let temp = 0;
    while (number > 0) {
      temp += number % 10;
      number = Math.floor(number / 10);
    }
    number = temp;
  }
  return number;
}