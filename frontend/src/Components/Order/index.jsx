import React, { useState } from 'react';

function Cart() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 1.00 },
    { id: 2, nome: 'Produto 2', preco: 1.00 },
    { id: 3, nome: 'Produto 3', preco: 1.00 }
  ]);
  const [quantidade, setQuantidade] = useState({
    1: 0,
    2: 0,
    3: 0
  });
  const [total, setTotal] = useState(0);

  const adicionarProduto = (id) => {
    const novoQuantidade = { ...quantidade };
    novoQuantidade[id]++;
    setQuantidade(novoQuantidade);
    calcularTotal();
  };

  const removerProduto = (id) => {
    const novoQuantidade = { ...quantidade };
    novoQuantidade[id]--;
    if (novoQuantidade[id] < 0) novoQuantidade[id] = 0;
    setQuantidade(novoQuantidade);
    calcularTotal();
  };

  const calcularTotal = () => {
    const novoTotal = produtos.reduce((acumulador, produto) => {
      return acumulador + produto.preco * quantidade[produto.id];
    }, 0);
    setTotal(novoTotal);
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} x {quantidade[produto.id]}
            <button onClick={() => adicionarProduto(produto.id)}>+</button>
            <button onClick={() => removerProduto(produto.id)}>-</button>
            <span>R$ {produto.preco * quantidade[produto.id]}</span>
          </li>
        ))}
      </ul>
      <p>Total: R$ {total}</p>
    </div>
  );
}

export default Cart;
// By TaldoZx