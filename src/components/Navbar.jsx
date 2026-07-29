import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import cart from "../assets/images/icon-cart.svg"

function Navbar() {
    return (
        <nav className="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <img src={menu} alt="Menu" className="h-4 mr-8" />
                    <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                src={logo}
                                alt="Sneakers"
                                className="w-32 sm:w-36 md:w-auto h-auto"
                            />
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-70"
                                >
                                    Collections
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-70"
                                >
                                    Men
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-70"
                                >
                                    Women
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-70"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-70"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 hover:opacity-70 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                        >
                            <img
                                src={cart}
                                alt="Cart"
                                className="block w-5 h-5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
