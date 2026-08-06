

import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"
import cart from "../assets/images/icon-cart.svg"
import previous from "../assets/images/icon-previous.svg"
import next from "../assets/images/icon-next.svg"

import LightBox from "./LightBox"

import { images } from "../data/images"
import { useState, useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

function Product() {
    const { selectedImage, setSelectedImage, setCount } =
        useContext(ProductContext)
    const [quantity, setQuantity] = useState(0)
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

    const handleThumbnailClick = (index) => {
        setSelectedImage(index)
    }

    const handleMobileGallery = (direction) => {
        if (direction === "next") {
            setSelectedImage((prev) => (prev + 1) % images.length)
        } else {
            setSelectedImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
            )
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 md:pt-10 lg:pt-0 h-full">
                    {/* Mobile Gallery */}
                    <div className="relative flex items-center md:hidden w-full px-8 pt-4">
                        <button
                            onClick={() => handleMobileGallery("previous")}
                            className="absolute left-8 top-1/2 -translate-y-1/2 
                        w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
                        >
                            <img src={previous} alt="previous" />
                        </button>

                        <img
                            src={images[selectedImage].main}
                            alt="Product"
                            className="w-full rounded-xl"
                        />

                        <button
                            onClick={() => handleMobileGallery("next")}
                            className="absolute right-8 top-1/2 -translate-y-1/2 
                        w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
                        >
                            <img src={next} alt="next" />
                        </button>
                    </div>
                    {/* Desktop Gallery */}
                    <div className="hidden md:block w-1/2">
                        <div className="p-6 lg:p-10">
                            <img
                                src={images[selectedImage].main}
                                alt="Product Image"
                                className="w-full max-w-xl rounded-xl cursor-pointer"
                                onClick={() => setIsLightBoxOpen(true)}
                            />

                            <div className="flex gap-4 lg:gap-6 mt-8">
                                {images.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.thumbnail}
                                        alt="Product Thumbnail"
                                        onClick={() =>
                                            handleThumbnailClick(index)
                                        }
                                        className={`
                                        w-1/4 rounded-xl cursor-pointer
                                        border-4
                                        ${
                                            index === selectedImage
                                                ? "border-[hsl(26_100%_55%)] opacity-60"
                                                : "border-transparent hover:border-[hsl(26_100%_55%)]"
                                        }
                                    `}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:p-10">
                        <h4 className="font-medium text-gray-500">
                            SNEAKER COMPANY
                        </h4>

                        <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                            Fall Limited Edition Sneakers
                        </h1>

                        <p className="mt-6 lg:mt-12 text-gray-500 leading-7">
                            These low-profile sneakers are your perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, they'll withstand everything the weather can
                            offer.
                        </p>

                        <div className="mt-8">
                            <h2 className="text-3xl font-bold">
                                125.00$
                                <span className="bg-gray-800 text-white text-lg px-3 py-1 rounded ml-3">
                                    50%
                                </span>
                            </h2>

                            <p className="line-through text-gray-500 text-lg">
                                250.00$
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 mt-10">
                            <div
                                className="flex items-center justify-center 
                        bg-gray-100 rounded-xl px-6 py-4 lg:py-0"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        quantity > 0 &&
                                        setQuantity((prev) => Math.max(0, prev - 1))
                                    }
                                >
                                    <img src={minus} alt="minus" />
                                </button>

                                <p className="mx-10 font-bold">{quantity}</p>

                                <button
                                    type="button"
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                >
                                    <img src={plus} alt="plus" />
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={() => setCount(quantity)}
                                className="
                                w-full lg:w-auto
                                px-10 lg:px-16
                                py-4
                                bg-[hsl(26_100%_55%)]
                                rounded-xl
                                font-bold
                                flex items-center justify-center
                                hover:opacity-80
                                active:scale-95
                                transition-transform
                            "
                            >
                                <img
                                    src={cart}
                                    alt="cart"
                                    className="w-5 mr-2"
                                />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isLightBoxOpen && (
                <LightBox onClose={() => setIsLightBoxOpen(false)} />
            )}
        </>
    )
}

export default Product
