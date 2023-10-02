import Produto from "../templates/Produto";

export default function GradeProdutos(props){
    if (!props.showCarrinho){
        if (props.listaProdutos){
            return(
                <div>
                    <h1>Lista produtos</h1>
                    <div style={{
                        width: '100%', 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        alignItems: 'center', 
                        margin: '10px',
                        padding: '10px',
                        gap: '20px'}}>
                            {props.listaProdutos.map((produto) => (
                                <Produto key={produto.id} 
                                        produto={produto}
                                        carrinhoItens={props.carrinhoItens}
                                        setCarrinhoItens={props.setCarrinhoItens}
                                        />
                            ))}
                    </div>
                </div>
            )
        }
        else{
            return (<h1>Carregando...</h1>)
        }
    }
    else{
        if (props.carrinhoItens){
            return(
                <div>
                    <h1>Carrinho de compras</h1>
                    <div style={{
                        width: '100%', 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        alignItems: 'center', 
                        margin: '10px',
                        padding: '10px',
                        gap: '20px'}}>
                            {props.carrinhoItens.map((produto) => (
                                <Produto key={produto.id} 
                                        produto={produto}
                                        carrinhoItens={props.carrinhoItens}
                                        setCarrinhoItens={props.setCarrinhoItens}
                                        showCarrinho={props.showCarrinho}
                                        />
                            ))}
                    </div>
                </div>
            )
        }
        else{
            return (<h1>Carregando...</h1>)
        }
    }
}