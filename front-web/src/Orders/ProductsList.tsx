import ProductCards from "./ProductCards";
import './style.css';
import { Produtos } from './types';
type Props = {
    produtos: Produtos[];
}

function ProductsList({ produtos}: Props) {
    return (
        <div className ="orders-list-container">
            <div className="orders-list-items">
              { produtos.map(produtos =>
                <ProductCards key ={produtos.id} produtos = {produtos} />
              )}
            </div>
        </div>

    )
}

export default ProductsList;

