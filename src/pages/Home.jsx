import Navbar from "../components/Navbar"
import Product from "../components/Product"
import Sidebar from "../components/Sidebar"

function Home() {
    return (
        <>
            <Sidebar />
            <Navbar />
            <main>
                <Product />
            </main>
        </>
    )
}

export default Home
