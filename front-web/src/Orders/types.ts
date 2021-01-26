export type Produtos ={
    id: number;
    nome: string;
    descricao: string;
    imageUri: string;
    preco:number;
}

export type OrderLocationdata = {
    latitude: number;
    longitude: number;
    address: string;
}