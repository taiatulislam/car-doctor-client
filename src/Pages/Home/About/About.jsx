import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="mt-28 max-w-7xl mx-auto">
            <div className="flex gap-7">
                <div className="w-1/2 relative">
                    <img src={img2} alt="parts" className='absolute w-2/4 h-1/2 border-[10px] border-white rounded-lg bottom-5 right-5' />
                    <img src={img1} alt="person" className='rounded-lg w-3/4 h-4/5' />

                </div>
                <div className="w-1/2">
                    <p className="text-[#FF3811] text-xl font-medium mb-5">About Us</p>
                    <h2 className="text-5xl font-bold w-2/3 mb-7">We are qualified & of experience in this field</h2>
                    <p className="text-[#737373] text-lg mb-5 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="text-[#737373] text-lg mb-7 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn normal-case text-white bg-[#FF3811]">Get More Info</button>
                </div>
            </div>

        </div>
    );
};

export default About;