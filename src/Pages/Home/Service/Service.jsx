import { useEffect, useState } from "react";
import { FiArrowRight } from 'react-icons/fi';


const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="text-center mt-28">
            <p className="text-[#FF3811] text-xl font-medium mb-5">Service</p>
            <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
            <p className="text-[#737373] w-1/2 mx-auto text-lg mb-12">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <div key={service._id} className="card bg-base-100 shadow-xl">
                        <figure className="p-5">
                            <img src={service.img} alt="Service" className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="p-5 pt-0">
                            <h2 className="text-xl font-semibold text-left">{service.title}</h2>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-[#FF3811] font-semibold">Price: ${service.price}</p>
                                <button className="text-[#FF3811]"><FiArrowRight></FiArrowRight></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button className="btn text-[#FF3811] bg-white normal-case border-[#FF3811] mt-12">More Services</button>
        </div>
    );
};

export default Service;