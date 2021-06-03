//Declarar características da classe produto
export class Produtos {
    id: number; 
    name: string; 
    description: string;
    price: number; 
    imagemUrl: string; //String para o link da imagem

    //Imagem do onix preto para saber se a mudança ocorreu
    constructor(id, name, description ='', price = 0 , imagemUrl ='https://orca.com.br/uploads/products/versions/preto-ouro-negro-novo-onix.png') { 
        this.id = id 
        this.name = name
        this.description = description
        this.price = price
        this.imagemUrl = imagemUrl
    }
}
