import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {useEffect, useState} from 'react';
import './style.css';
import { OrderLocationdata, Produtos } from './types';
import { fetchProdutos } from './api';
import OrderLocation from './OrderLocation';


function Orders() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() =>{
        fetchProdutos()
        .then(response => setProdutos(response.data))
        .catch(error => console.log(error))

    }, [] );


    return (
        <div className ="orders-container">
            <StepsHeader />
            <ProductsList produtos = {produtos}/>
            <OrderLocation onChangeLocation= {location => setOrderLocation(location)}/>
        </div>

    )
}

export default Orders;

