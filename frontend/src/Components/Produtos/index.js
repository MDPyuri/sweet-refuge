import React from 'react';

const produto = ({ produto }) => ( // Recebe o produto como parâmetro
  <div className="produto">
    <h3>{produto.nome}</h3> // Exibe o nome do produto com base no parâmetro
    <div>
      <img src={produto.imagem} alt={produto.nome} /> // Exibe a imagem do produto com base no parâmetro
    </div>
    <p>{produto.descrição}</p> // Exibe a descrição do produto com base no parâmetro
    <p>R$ {produto.preço}</p> // Exibe o preço do produto com base no parâmetro
  </div>
)

export default produto;
