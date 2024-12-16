import React from 'react';
import './style.css';

const produto = ({ produto }) => ( // Recebe o produto como parâmetro
  <div className="produto">
    <div>
      <img src={produto.imagem} alt={produto.nome} /> {/* Exibe a imagem do produto com base no parâmetro */}
    </div>
    <h3 className='nome'>{produto.nome}</h3> {/* Exibe o nome do produto com base no parâmetro */}
     <p className='desc'>{produto.descrição}</p> {/* Exibe a descrição do produto com base no parâmetro */}
     <p className='preco'>R$ {produto.preço}</p> {/* Exibe o preço do produto com base no parâmetro */}
  </div>
)

export default produto;
