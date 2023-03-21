import { buscarProduto } from '../components/Produto';

function NovaVenda() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProdutoAoCarrinho(id) {
    const produto = buscarProduto(id);
    setCarrinho([...carrinho, produto]);
  }

  function efetivarVenda() {
    // implementação da função para efetivar a venda
  }

  return (
    <View>
      {/* renderização da lista de produtos disponíveis */}
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho}
        />
      ))}

      {/* renderização do carrinho de compras */}
      <Carrinho carrinho={carrinho} />

      {/* botão para efetivar a venda */}
      <Button title="Efetivar venda" onPress={efetivarVenda} />
    </View>
  );
}