import { useState, useContext } from "react"
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import { ProductContext } from "../context/ProductContext"

function Cart({ isOpen }) {
    const { count, setCount } = useContext(ProductContext)

    if (isOpen) {
        return (
            <div className="absolute right-0 top-16 w-80 p-8 bg-white border border-gray-400 rounded-xl shadow-xl">
                {count === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <img
                                src={thumbnail1}
                                alt="product image"
                                className="w-20 rounded mr-3"
                            />
                            <div className="flex flex-col font-sans text-gray-700">
                                <p className="">
                                    Fall Limited Edition Sneakers
                                </p>
                                <p>
                                    125$ x {count}{" "}
                                    <span className="font-bold">
                                        {count * 125}$
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="px-16 py-4 mx-8 my-8 bg-[hsl(26_100%_55%)] rounded-xl font-bold text-lg hover:opacity-80 active:scale-95 transition-transform"
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default Cart
