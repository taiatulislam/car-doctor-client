import { useEffect, useState } from "react";


const PopularProduct = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('/popularProduct.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])

    return (
        <div className="text-center mt-28 max-w-7xl mx-auto">
            <p className="text-[#FF3811] text-xl font-medium mb-5">Popular Products</p>
            <h2 className="text-5xl font-bold mb-5">Browse Our Products</h2>
            <p className="text-[#737373] w-1/2 mx-auto text-lg mb-12">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>

            <div className="grid grid-cols-3 gap-6">
                {
                    popular.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure className="p-5">
                            <img src={product.img} alt="Service" className="rounded-xl h-[250px] bg-base-300 w-full" />
                        </figure>
                        <div className="p-5 pt-0">
                            <h2 className="text-xl font-semibold text-left">{product.title}</h2>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-[#FF3811] font-semibold">Price: ${product.price}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button className="btn text-[#FF3811] bg-white normal-case border-[#FF3811] mt-12">More Product</button>
        </div>
    );
};

export default PopularProduct;