import image1 from "../assets/images/image-product-1.jpg"
import image2 from "../assets/images/image-product-2.jpg"
import image3 from "../assets/images/image-product-3.jpg"
import image4 from "../assets/images/image-product-4.jpg"
import thumbnailImage1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnailImage2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnailImage3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnailImage4 from "../assets/images/image-product-4-thumbnail.jpg"
import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"
import cart from "../assets/images/icon-cart.svg"
import { useState, useEffect, useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const images = [
    {
        main: image1,
        thumbnail: thumbnailImage1,
    },
    {
        main: image2,
        thumbnail: thumbnailImage2,
    },
    {
        main: image3,
        thumbnail: thumbnailImage3,
    },
    {
        main: image4,
        thumbnail: thumbnailImage4,
    },
]

function Product() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const { count, setCount } = useContext(ProductContext)

    const handleThumbnailClick = (index) => {
        setSelectedImage(index)
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-start max-w-400">
                <div className="p-10 h-auto flex flex-col justify-start mt-14">
                    <img
                        src={images[selectedImage].main}
                        alt="Product Image"
                        className="w-full max-w-140 rounded-xl"
                    />
                    <div className="hidden md:flex flex-row gap-3 lg:gap-7">
                        {images.map((item, index) =>
                            index === selectedImage ? (
                                <img
                                    key={index}
                                    src={item.thumbnail}
                                    alt="Product Thumbnail"
                                    onClick={() => handleThumbnailClick(index)}
                                    className="w-1/5 rounded-xl mt-10 border-4 border-[hsl(26_100%_55%)] opacity-60"
                                />
                            ) : (
                                <img
                                    key={index}
                                    src={item.thumbnail}
                                    alt="Product Thumbnail"
                                    onClick={() => handleThumbnailClick(index)}
                                    className="w-1/5 rounded-xl mt-10 border-4 border-transparent hover:border-[hsl(26_100%_55%)]"
                                />
                            ),
                        )}
                    </div>
                </div>
                <div className="flex flex-col p-8 md:ml-12 h-auto mt-32 ">
                    <h4 className="font-sans font-medium text-gray-500">
                        SNEAKER COMPANY
                    </h4>
                    <div>
                        <h1 className="mt-5 font-sans text-gray-800 text-5xl font-bold">
                            Fall Limited Edition Sneakers
                        </h1>
                        <p className="mt-12 font-normal md:font-medium text-gray-500">
                            These low-profile sneakers are your perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, they'll withstand everything the weather can
                            offer.
                        </p>
                    </div>
                    <div className="font-bold font-sans text-3xl mt-8">
                        <h2 className="">
                            125.00${" "}
                            <span className="bg-gray-800 text-white text-lg p-1 rounded px-3 ml-3">
                                50%
                            </span>
                        </h2>
                        <p className="line-through text-lg text-gray-500">
                            250.00$
                        </p>
                    </div>
                    <div className="flex flex-row mt-12">
                        <div className="flex flex-row align-middle justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    quantity > 0 && setQuantity(quantity - 1)
                                }
                            >
                                <img src={minus} alt="minus" className="" />
                            </button>
                            <p className="mx-10 self-center">{quantity}</p>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <img src={plus} alt="plus" className="" />
                            </button>
                        </div>
                        <button
                            type="button"
                            className="px-10 lg:py-4 lg:px-16 md:px-14 py-2 font-bold bg-[hsl(26_100%_55%)] ml-6 rounded-xl flex justify-center align-middle hover:opacity-80 active:scale-95 transition-transform"
                            onClick={() => setCount(quantity)}
                        >
                            <img
                                src={cart}
                                alt="Cart"
                                className="w-4 sm:w-4 md:w-5 sm:mr-1 md:mr-2 "
                            />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
