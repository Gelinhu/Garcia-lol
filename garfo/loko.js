//Exercicio 1
function exerc01(coisa) {
    let li = document.querySelectorAll("li")

    coisa.map((element, i) => {
        li[i].style.backgroundColor = element
    })
}


//Exercicio2
function unfold(seed, f) {
    if (seed > 1024) {
        return []
    }
    return [seed].concat(unfold(f(seed), f));
}
let g = s => s * 2
function exerc02() {
    let primseed = 1;
    let seq = unfold(primseed, g);
    let ul = document.createElement('ul');
    seq.map(valor => {
        let li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
    })
    document.body.appendChild(ul);

}



//Exercicio 3
function unfold2(seed, f) {
    if (seed > 50) {
        return []
    }
    return [seed].concat(unfold2(f(seed), f));
}

let d = s => s + 1
function exerc03() {

    let primeiraseed = 1;
    let seq = unfold2(primeiraseed, d);
    let ul = document.createElement('ul');

    seq.filter((pares) => {
        if (pares % 2 == 0) {
            return pares
        }
    }).forEach(pares => {
        let li = document.createElement('li');
        li.textContent = pares;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);

}

//Exercicio 4
function exerc04() {
    let div = Array.from(document.querySelectorAll("div"))
    return div.reduce((a, b) => {
        return a + b.textContent
    }, "")
}

//Exercicio 5
function exerc05(notas) {
    let ul = document.createElement('ul')
    notas.filter((nota => {
        if (nota.nota > 6) {
            return nota
        }
    })).map(aluno => {
        let li = document.createElement("li")
        li.textContent = aluno.nome + " " + aluno.nota
        ul.appendChild(li);
    })
    document.body.appendChild(ul);
}

//Exercicio 6
function exerc06(estoque) {
    let p = document.createElement("p");

    let produtosEstoque = estoque.filter((quantidade) => {
        if (quantidade.quantidade > 5) {
            return quantidade
        }
    })
    let valorProdutos = produtosEstoque.reduce((total, produto) => {
        return total + (produto.preco * produto.quantidade)
    }, 0)
    p.textContent = 'Valor total do estoque (produtos com mais de 5 unidades): R$ ${valorProdutos}'
    document.body.appendChild(p)
}
