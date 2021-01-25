import './style.css';
import { Produtos } from './types';


type Props = {
    produtos: Produtos;
}

function formatPreco(preco: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return formatter.format(preco);
}

function ProductCards({ produtos }: Props) {
    return (
        <div className ="order-card-container">
            <h3 className="order-card-title">
                {produtos.nome}
            </h3>
            <img src ={produtos.imageUri} className ="order-card-image" alt ={produtos.nome}/>
            <h3 className ="order-card-price">
                {formatPreco(produtos.preco)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                {produtos.descricao}
                </p>

            </div>
        </div>

    )
}

export default ProductCards;

