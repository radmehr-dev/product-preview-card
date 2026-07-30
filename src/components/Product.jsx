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
import { useState } from "react"

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
    const [amount, setAmount] = useState(0)

    function handleThumbnailClick(index) {
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
                
            </div>
        </div>
    )
}

export default Product
