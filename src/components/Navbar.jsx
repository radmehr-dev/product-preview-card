import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"

function Navbar() {
    return (
        <nav className="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px font-light">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <img src={menu} alt="Menu" className="h-4 mr-8 block md:hidden" />
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
                                    className="px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-lg"
                                >
                                    Collections
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-lg"
                                >
                                    Men
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-lg"
                                >
                                    Women
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-lg"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-5 pt-7 font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-[hsl(26_100%_55%)] text-lg"
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
                                className="block w-5 h-5 mx-4"
                            />
                        </button>
                        <button
                            type="button"
                            className=""
                        >
                            <img   
                                src={avatar}
                                alt="User Avatar"
                                className="h-12 w-12 border-2 border-transparent rounded-full hover:border-[hsl(26_100%_55%)]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
