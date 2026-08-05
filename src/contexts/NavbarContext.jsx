import { createContext, useState } from "react";

export const NavbarContext = createContext()

export function NavbarProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    
    return (
        <NavbarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}

