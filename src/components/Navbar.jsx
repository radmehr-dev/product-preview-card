import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import Cart from "../components/Cart"
import { useState } from "react"
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { NavbarContext } from "../contexts/NavbarContext"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { count } = useContext(ProductContext)
    const { isSidebarOpen, setIsSidebarOpen } = useContext(NavbarContext)

    const handleCart = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <nav className="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px font-light">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-14 lg:h-16 items-center justify-between">
                    <button
                        className="p2"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <img
                            src={menu}
                            alt="Menu"
                            className="h-4 mr-8 ml-3 block md:hidden"
                        />
                    </button>
                    <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                src={logo}
                                alt="Sneakers"
                                className="w-28 sm:w-32 lg:w-auto h-auto"
                            />
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-1 lg:space-x-4">
                                <a
                                    href="#"
                                    className="px-2 lg:px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-sm lg:text-lg"
                                >
                                    Collections
                                </a>
                                <a
                                    href="#"
                                    className="px-2 lg:px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-sm lg:text-lg"
                                >
                                    Men
                                </a>
                                <a
                                    href="#"
                                    className="px-2 lg:px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-sm lg:text-lg"
                                >
                                    Women
                                </a>
                                <a
                                    href="#"
                                    className="px-2 lg:px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-sm lg:text-lg"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="px-2 lg:px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-sm lg:text-lg"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    <Cart isOpen={isOpen} />
                    <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative mr-4">
                            <button onClick={handleCart}>
                                <img src={cart} alt="Cart" />
                            </button>

                            {count > 0 && (
                                <span className="absolute -top-2 right-2 bg-orange-500 text-white text-xs rounded-full px-2">
                                    {count}
                                </span>
                            )}
                        </div>
                        <button type="button" className="">
                            <img
                                src={avatar}
                                alt="User Avatar"
                                className="h-9 w-9 lg:h-12 lg:w-12 border-2 border-transparent rounded-full hover:border-[hsl(26_100%_55%)]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
