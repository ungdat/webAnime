import { DOLLAR } from "./constant"

export const formatPrice = (price: number | string)=>{
    return price + DOLLAR
}