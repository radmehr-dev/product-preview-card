import { createContext, useState } from "react";

export const ProductContext = createContext()

export function ProductProvider({ children }) {
    const [count, setCount] = useState(0)
    return (
        <ProductContext.Provider value={{ count, setCount }}>
            {children}
        </ProductContext.Provider>
    )
}