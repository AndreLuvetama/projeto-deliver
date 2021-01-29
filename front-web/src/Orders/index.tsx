import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import './style.css';
import { OrderLocationData, Produtos } from './types';
import { fetchProdutos, saveOrder } from './api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';



function Orders() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const [selectedProducts, setSelectedProducts] = useState<Produtos[]>([]);
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.preco;
    }, 0);

    useEffect(() =>{
        fetchProdutos()
        .then(response => setProdutos(response.data))
        .catch(error => console.log(error))

    }, [] );

    const handleSelectProduct = (produtos: Produtos) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, produtos);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== produtos.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, produtos]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          produtos: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }


    return (
            <>
                <div className="orders-container">
                    <StepsHeader />
                    <ProductsList produtos={produtos}
                     onSelectProduct={handleSelectProduct}
                     selectedProducts = {selectedProducts}
                     />
                    <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                    <OrderSummary 
                        amount={selectedProducts.length}
                        totalPrice={totalPrice} 
                        onSubmit={handleSubmit}
                        />
                </div>
                    <Footer />
            </>

    )
}

export default Orders;

