import { CategoryInterFace } from '@/types/categories';
import { createContext, ReactNode, useContext } from 'react';
export const CategoryContext = createContext<CategoryInterFace | null>(null);
interface CategoryProviderProps {
  children: ReactNode;
  data: CategoryInterFace;
}

export default function CategoryProvider({ children, data }: CategoryProviderProps) {
  return <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>;
}
export function useCategoryContext(){
    return useContext(CategoryContext)
}