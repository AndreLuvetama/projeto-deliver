import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {useEffect, useState} from 'react';
import './style.css';
import { Produtos } from './types';
import { fetchProdutos } from './api';


function Orders() {

    const[produtos, setProdutos] = useState<Produtos[]>([]);

    useEffect(() =>{
        fetchProdutos()
        .then(response => setProdutos(response.data))
        .catch(error => console.log(error))

    }, [] );


    return (
        <div className ="orders-container">
            <StepsHeader />
            <ProductsList produtos = {produtos}/>
        </div>

    )
}

export default Orders;

