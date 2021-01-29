export type Produtos ={
    id: number;
    nome: string;
    descricao: string;
    imageUri: string;
    preco:number;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}
type ProdutosId = {
    id: number;
}

export type OrderPayload = {
    produtos: ProdutosId[];
} & OrderLocationData;