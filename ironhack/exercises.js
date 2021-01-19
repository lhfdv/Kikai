//const word = 'Abracadabra';

const word = 'Hello World';

const substring = 'o';

const substringIndexes = [];

console.time('teste'); //teste - cronometro

for(let i = 0; i < word.length; i++){
    console.log(`Interação ${i + 1}`, word.charAt(i));

    //substring === word[i] ? substringIndexes.push(i) : console.log(`Não encontrado "${substring}" dentro de ${i}`);


    //usar switch quando souber os testes que for fazer

    switch(word[i]){
        case substring:
            substringIndexes.push(i);
            break; //nao testa os de baixo
        default: console.log(`Não encontrado "${substring}" dentro de ${i}`);
    }

//    if(substring === word[i]){
//        substringIndexes.push(i);
//    } else{
//        console.log(`Não encontrado "${substring}" dentro de ${i}`);
//   }

}

console.timeEnd('teste'); //teste - cronometro

console.log(substringIndexes);

//const isWordStartsWithSubstring = word.indexOf(substring, 7);

//lastIndexOf = ultima ocorrencia
//indexOf sempre retorna um número

//console.log(isWordStartsWithSubstring);
