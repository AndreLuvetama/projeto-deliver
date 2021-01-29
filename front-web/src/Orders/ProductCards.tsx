import { formatPreco } from './helpers';
import './style.css';
import { Produtos } from './types';


type Props = {
    produtos: Produtos;
    onSelectProduct: (produtos: Produtos) => void;
    isSelected: boolean;
}



function ProductCards({ produtos, onSelectProduct, isSelected }: Props) {
    return (
        <div className ={`order-card-container ${isSelected ? 'selected' : '' }`}
        onClick = {() => onSelectProduct(produtos)}
        >
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

