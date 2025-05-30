import { ProductInterFace } from '@/types';
import { createContext, ReactNode, useContext } from 'react';
export const ProductContext = createContext<ProductInterFace | null>(null);
interface ProductProviderProps {
  children: ReactNode;
  data: ProductInterFace;
}

export default function ProductProvider({ children, data }: ProductProviderProps) {
  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
}
export function useProductContext(){
    return useContext(ProductContext)
}