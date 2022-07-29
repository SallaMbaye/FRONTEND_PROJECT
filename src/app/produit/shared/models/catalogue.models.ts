import { Produit } from "./produit.models";

export interface Catalogue{
    menus: Produit[]
    burgers: Produit[]
    produits:Produit[]
}