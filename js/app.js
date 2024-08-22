// Referência ao elemento que exibirá os produtos no carrinho
let produtosNoCarrinho = document.getElementById('lista-produtos');

// Referência ao elemento que exibirá o valor total do carrinho
let valorTotal = document.getElementById('valor-total');

// Inicializa o total do carrinho como 1400
let total = 1400;

function adicionar() {
    // Obtém o valor selecionado do produto e a quantidade inserida
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidadeProduto = parseInt(document.getElementById('quantidade').value);

    // Declara variáveis para armazenar o nome do produto e seu valor
    let nomeProduto, valorProduto;

    // Define o nome do produto e seu valor com base na seleção do usuário
    if (produtoSelecionado.includes('Fone de ouvido')) {
        nomeProduto = 'Fone de ouvido';
        valorProduto = 100;
    } else if (produtoSelecionado.includes('Celular')) {
        nomeProduto = 'Celular';
        valorProduto = 1400;
    } else if (produtoSelecionado.includes('Oculus VR')) {
        nomeProduto = 'Oculus VR';
        valorProduto = 5000;
    }

    // Adiciona o valor 0 ao campo quantidade após adicionar um produto ao carrinho
    document.getElementById('quantidade').value = 0;

    // Calcula o valor total dos produtos selecionados (quantidade x preço unitário)
    let valorTotalProdutos = quantidadeProduto * valorProduto;

    // Atualiza o valor total do carrinho somando o novo valor ao total anterior
    total += valorTotalProdutos;

    // Cria um novo elemento <section> para adicionar o produto ao carrinho
    let sectionProdutosNoCarrinho = document.createElement('section');
    sectionProdutosNoCarrinho.classList.add('carrinho__produtos__produto');

    // Cria um elemento <span> para a quantidade e define sua classe e conteúdo
    let spanQtdd = document.createElement('span');
    spanQtdd.classList.add('texto-azul');
    spanQtdd.textContent = `${quantidadeProduto}x`;

    // Cria um nó de texto para o nome do produto
    let textoNomeProduto = document.createTextNode(` ${nomeProduto} `);

    // Cria um elemento <span> para o valor do produto e define sua classe e conteúdo
    let spanValor = document.createElement('span');
    spanValor.classList.add('texto-azul');
    spanValor.textContent = `R$${valorProduto}`;

    // Adiciona a quantidade, nome e valor do produto ao novo elemento <section>
    sectionProdutosNoCarrinho.appendChild(spanQtdd);
    sectionProdutosNoCarrinho.appendChild(textoNomeProduto);
    sectionProdutosNoCarrinho.appendChild(spanValor);

    // Se a quantidade de produto for 0, nenhum produto é adicionado ao carrinho
    if (quantidadeProduto == 0) {
        return;
    } else {
        // Adiciona a <section> criada ao elemento do carrinho para exibição
        produtosNoCarrinho.appendChild(sectionProdutosNoCarrinho);
    }

    // Atualiza o texto do valor total do carrinho na interface
    valorTotal.textContent = `R$${total}`;
}

function limpar() {
    // Remove todos os produtos do carrinho e reseta o conteúdo do elemento
    produtosNoCarrinho.innerHTML = '';

    // Reseta o valor total do carrinho para 0
    total = 0;

    // Atualiza o texto do valor total na interface para exibir R$0
    valorTotal.textContent = `R$${total}`;

}
