import { Produtos } from "./types";

export function checkIsSelected(selectedProducts: Produtos[], produtos: Produtos){
    return selectedProducts.some(item => item.id === produtos.id);
}


export function formatPreco(preco: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return formatter.format(preco);
}