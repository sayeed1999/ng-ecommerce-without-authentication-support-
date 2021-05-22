import { ICartItem } from "./cart.model";

export interface IShopping {
    cart: ICartItem[],
    totalCost: number,
    totalQty: number,
}