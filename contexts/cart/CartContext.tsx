import { CartCollectionType } from '@/types/cart';
import { createContext, ReactNode, useContext } from 'react';
export const CartContext = createContext<CartCollectionType | null>(null);
interface CartProviderProps {
  data: CartCollectionType;
  children: ReactNode;
}

export default function CartProvider({ children,data }: CartProviderProps) {
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
export function useCartContext(){
    return useContext(CartContext)
}