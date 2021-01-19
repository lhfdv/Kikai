// Dado ume string, um índice inicial e um índice final, imprima no console uma string que seja uma "fatia da string original", excluindo o caractere do indice final (não usem substring, substr ou slice)

const word = 'Abracadabra';
const initialIndex = 1;
const finalIndex = 4;

let slicedWord = '';
let i = initialIndex;

while(i<finalIndex){
    slicedWord += word[i];
    //    slicedWord = slicedWord.concat(word[i]);
    i++;
}

console.log(slicedWord);

///////////////////////////////////////////////////////////
//function teste

function getStringSlice(input, initIndex, finIndex){
    let slicedWord2 = '';
    let counter = initIndex;
    
    while(counter<finIndex){
        slicedWord2 += input[counter];
        counter = sum(counter, 1);
        // y++;
    }
    console.log(slicedWord2);
    return slicedWord2
}

function sum(num1, num2){
    return num1 + num2;
}

//console.log(getStringSlice('test', 1, 4));

getStringSlice('test', 1, 4);

const slice1 = getStringSlice('test', 1, 4);

console.log('SLICE 1 > ', slice1);

//concat não mexe na string original

// === e ==
// == validacao de valor, ignora o tipo da variavel
// === igual persistente, nao verifica nada alem dos valores
//charCodeAt - ASCII

//void retorna undefined

function avg(array){
    if(!array.length) return;
    //if(array.length === 0) return;
    for (let sum=0, i=0; i<array.lenght; i++){
        sum += array[i];
    }
    return sum / array.length;
}

console.log(avg([1, 2, 3, 4]));

//melhor ter varias funcoes fazendo poucas coisas, ao inves de ter uma grande fazendo muita coisa, pois da para reaproveitar


const array = [1, 'string', false, { name: 'thais' }, [1, 'outra', true, [{name: 'test'}, false]]];

console.log(array[4][3][1]);
console.log(array[3].name);

array[1][0] = 'S'; //ignora

array[0] = 3; 
//póde mudar const array

//estruta de dados primitiva e não primitivas

let myString = 'Minha string';

myString = myString.replace('M', 'm');

console.log(myString);

//array.shift(); //remove element odo inicio

const retorno = array.shift();

console.log(retorno);