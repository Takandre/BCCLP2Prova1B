import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  const [carrinhoItens, setCarrinhoItens] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);
  let lista = localStorage;
  for(let i=0; i<carrinhoItens.length; i++){
    lista.setItem("id", carrinhoItens[i].id)
    lista.setItem("titulo", carrinhoItens[i].title)
  }

  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca listaProdutos={produtos}
                  carrinhoItens={carrinhoItens}
                  setCarrinhoItens={setCarrinhoItens}
                  carrinhoTamanho={carrinhoItens.length}
                  showCarrinho={showCarrinho}
                  setShowCarrinho={setShowCarrinho}
                  />
      <GradeProdutos listaProdutos={produtos}
                     carrinhoItens={carrinhoItens}
                     setCarrinhoItens={setCarrinhoItens}
                     showCarrinho={showCarrinho}
                     setShowCarrinho={setShowCarrinho}
                     />
    </div>
  );
}

export default App;
