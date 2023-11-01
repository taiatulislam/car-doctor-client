import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="carousel h-[80vh] mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full rounded-xl">
                        <div className='text-white w-1/3 space-y-7 pl-24'>
                            <h3 className='text-5xl font-bold text-'>Affordable Price For Car Servicing</h3>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn text-white bg-[#FF3811] border-none rounded-none normal-case mr-5'>Discover More</button>
                            <button className='btn text-white bg-transparent border-2 border-white rounded-none normal-case'>Latest Project</button>
                        </div>
                        <div className='absolute right-5 bottom-5 flex gap-5'>
                            <a href="#slide4" className="btn btn-circle text-white bg-opacity-30 border-none">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full rounded-xl">
                        <div className='text-white w-1/3 space-y-7 pl-24'>
                            <h3 className='text-5xl font-bold text-'>Affordable Price For Car Servicing</h3>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn text-white bg-[#FF3811] border-none rounded-none normal-case mr-5'>Discover More</button>
                            <button className='btn text-white bg-transparent border-2 border-white rounded-none normal-case'>Latest Project</button>
                        </div>
                        <div className='absolute right-5 bottom-5 flex gap-5'>
                            <a href="#slide1" className="btn btn-circle text-white bg-opacity-30 border-none">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full rounded-xl">
                        <div className='text-white w-1/3 space-y-7 pl-24'>
                            <h3 className='text-5xl font-bold text-'>Affordable Price For Car Servicing</h3>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn text-white bg-[#FF3811] border-none rounded-none normal-case mr-5'>Discover More</button>
                            <button className='btn text-white bg-transparent border-2 border-white rounded-none normal-case'>Latest Project</button>
                        </div>
                        <div className='absolute right-5 bottom-5 flex gap-5'>
                            <a href="#slide2" className="btn btn-circle text-white bg-opacity-30 border-none">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider4} className="w-full rounded-xl" />
                    <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full rounded-xl">
                        <div className='text-white w-1/3 space-y-7 pl-24'>
                            <h3 className='text-5xl font-bold text-'>Affordable Price For Car Servicing</h3>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn text-white bg-[#FF3811] border-none rounded-none normal-case mr-5'>Discover More</button>
                            <button className='btn text-white bg-transparent border-2 border-white rounded-none normal-case'>Latest Project</button>
                        </div>
                        <div className='absolute right-5 bottom-5 flex gap-5'>
                            <a href="#slide3" className="btn btn-circle text-white bg-opacity-30 border-none">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;