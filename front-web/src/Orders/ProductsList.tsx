import { checkIsSelected } from "./helpers";
import ProductCards from "./ProductCards";
import './style.css';
import { Produtos } from './types';

type Props = {
    produtos: Produtos[];
    selectedProducts: Produtos[];
    onSelectProduct: (produtos: Produtos) => void;
}

function ProductsList({ produtos, selectedProducts, onSelectProduct}: Props) {
    return (
        <div className ="orders-list-container">
            <div className="orders-list-items">
              { produtos.map(produtos =>
                <ProductCards 
                key ={produtos.id}
                produtos = {produtos} 
                onSelectProduct ={onSelectProduct}
                isSelected = {checkIsSelected(selectedProducts, produtos)}
                />
              )}
            </div>
        </div>

    )
}

export default ProductsList;

