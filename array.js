const pessoa = ["Dimitri", "Teixeira", 30, "professor"];

pessoa.push("casado");

document.getElementById("teste").innerHTML = pessoa.join(" * ");

document.getElementById("teste2").innerHTML = pessoa.join(" - ");

/*Deletar, inserir,  itens na lista

pessoa.pop(); ultimo item


pessoa.push("casado");

pessoa.shift(); primeiro da lista (altera indice dos demais)

pessoa.unshift(blabla); colocar no primeiro do indice

delete pessoa [0]; quando quer deletar item sem alterar os indices (ficará undefined)

pessoa.splice(1,0, "item adicionado 1", "item adicionado 2"), escolhemos quais itens inserir e qual remover

para juntar arrays:
*/
const lista1 = [ "", "", "", ""];
const lista2 = [ "", ""];

const superlista = lista1.concat(lista2);

console.log(superlista)


// em ordem alfabetica pessoa.sort () contrario reverse

// colocar ordem numerica numeros.sort(function (a,b) {retorn a -b});








