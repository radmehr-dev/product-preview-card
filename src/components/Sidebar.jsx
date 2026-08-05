import { NavbarContext } from "../contexts/NavbarContext"
import { useContext } from "react"
import close from "../assets/images/icon-close.svg"

function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(NavbarContext)

    return (
        <div
            className={`w-[60%] p-8 bg-gray-200 border border-gray-400 h-screen fixed z-999 transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex justify-start w-full mb-8">
                <button className="p-4" onClick={() => setIsSidebarOpen(false)}>
                    <img src={close} alt="close icon" className="w-4 h-4" />
                </button>
            </div>
            <ul className="decoration-0 text-xl font-bold">
                <li className="py-4 px-8 hover:bg-gray-300">Collections</li>
                <li className="py-4 px-8 hover:bg-gray-300">Men</li>
                <li className="py-4 px-8 hover:bg-gray-300">Women</li>
                <li className="py-4 px-8 hover:bg-gray-300">About</li>
                <li className="py-4 px-8 hover:bg-gray-300">Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar
