import React from 'react';
import { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect
import ListaProdutos from '../ListaProdutos';

const SecaoProdutos = () => { // Cria o componente SecaoProdutos
  const [produtos, setProdutos] = useState([]); // Inicializa o estado produtos como um array vazio

  useEffect(() => { // Define o efeito colateral para buscar os produtos
    const produtosTeste = [
      { nome: 'Produto1', imagem: 'https://via.placeholder.com/150', descrição: 'Descrição do produto', preço: 10.00 },
      { nome: 'Produto2', imagem: 'https://via.placeholder.com/150', descrição: 'Descrição do produto', preço: 10.00 },
      { nome: 'Produto3', imagem: 'https://via.placeholder.com/150', descrição: 'Descrição do produto', preço: 10.00 },
    ];
    setProdutos(produtosTeste); // Atualiza o estado produtos com os produtos de teste
  }, []); // Define a dependência como um array vazio para executar o efeito apenas uma vez

  return (
    <div className="secao-produtos">
      <h2>Produtos</h2>
      <ListaProdutos produtos={produtos} /> {/* Renderiza o componente ListaProdutos com a lista de produtos */}
    </div>
  );
};

export default SecaoProdutos;
