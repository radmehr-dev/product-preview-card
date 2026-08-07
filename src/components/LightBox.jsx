import next from "../assets/images/icon-next.svg"
import previous from "../assets/images/icon-previous.svg"
import close from "../assets/images/icon-close.svg"

import { images } from "../data/images"
import { ProductContext } from "../contexts/ProductContext"
import { useState, useContext } from "react"

function LightBox({ onClose }) {
    const { selectedImage, setSelectedImage } = useContext(ProductContext)

    const handleNextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length)
    }

    const handlePreviousImage = () => {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleThumbnailClick = (index) => {
        setSelectedImage(index)
    }
    return (
        <div
            className="
            fixed inset-0
            bg-black/70
            backdrop-blur-sm
            flex items-center justify-center
            z-50
            flex-col
        "
        >
            <button onClick={onClose} className="absolute top-8 right-8">
                <img src={close} alt="Close" className="w-8 h-8" />
            </button>
            <button
                onClick={handlePreviousImage}
                className="
        absolute left-8 top-1/2 -translate-y-1/2
        w-12 h-12
        bg-white rounded-full
        flex items-center justify-center
    "
            >
                <img src={previous} alt="previous" />
            </button>

            <img
                src={images[selectedImage].main}
                alt="Product Image"
                className="w-125 rounded-xl"
            />

            <button
                onClick={handleNextImage}
                className="
        absolute right-8 top-1/2 -translate-y-1/2
        w-12 h-12
        bg-white rounded-full
        flex items-center justify-center
    "
            >
                <img src={next} alt="next" />
            </button>
            <div className="w-1/6 flex justify-center">
                <div className="flex gap-4 lg:gap-6 mt-8 justify-center">
                    {images.map((item, index) => (
                        <img
                            key={index}
                            src={item.thumbnail}
                            alt="Product Thumbnail"
                            onClick={() => handleThumbnailClick(index)}
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
    )
}

export default LightBox
