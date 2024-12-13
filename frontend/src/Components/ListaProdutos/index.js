import React from 'react';
import Produto from '../Produtos'; // Importa o componente Produto

const ListaProdutos = ({ produtos }) => ( // Recebe a lista de produtos como parâmetro
  <div className="lista-produtos">
    {produtos.map((produto, index) => ( // Mapeia a lista de produtos criando um novo array com o componente Produto para cada produto
      <Produto key={index} produto={produto} /> // Para cada produto, renderiza o componente Produto
    ))}
  </div>
);

export default ListaProdutos;