let nomes = ["isa", "victor", "pedro", "samuel", "geovana"]

console.log(nomes);

console.log(nomes [3]); //consulta a posição começando do 0 



nomes[4] = "caleb"


console.log(nomes);

console.log(nomes.length); // faz a contagem de quantas tem no meu  array


nomes[nomes.length] = "geovana"

console.log(nomes);

nomes.push("nicolas") //push adiciona mais um valor ao final da array

console.log(nomes);


nomes.unshift("ro") //unshift adiciona um valor no começo da array

console.log(nomes);


nomes.pop //apaga o ulmo nome 


console.log(nomes);
nomes.shift
console.log(nomes);

let ultimonome = nomes.shift()

console.log(nomes);
console.log(ultimonome);
let primeironome = nomes.shift()
console.log(nomes);
console.log(primeironome);




nomes.forEach((linha, contador) => {
    console.log("o " + (contador + 1 ) + " registro é: " + linha);
    
})






