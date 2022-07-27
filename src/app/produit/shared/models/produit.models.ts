export interface Produit{
    id? :number
    nom:string
    prix:number
    image:string
    type?:string
}

export interface Catalogue{
    burger:Produit[],
    menu:Produit[],
    produit:Produit[]
}

export interface Burger extends Produit{

    
    
}
export interface Menu extends Produit{

    
    
}