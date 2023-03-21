import { listarProdutos } from '../components/Produto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const listaDeProdutos = listarProdutos();
    setProdutos(listaDeProdutos);
  }, []);

  return (
    <View>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </View>
  );
}