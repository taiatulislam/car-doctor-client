import calender from '../../../assets/icons/calender.svg'
import call from '../../../assets/icons/call.svg'
import location from '../../../assets/icons/location.svg'

const Stat = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-3 gap-14 bg-[#151515] text-white py-24 px-16 rounded-xl">

                <div className="flex items-center gap-4 justify-center">
                    <div className="">
                        <img src={calender} alt="" />
                    </div>
                    <div className="">
                        <p>We are open monday-friday</p>
                        <p className='text-2xl'>7:00 am - 9:00 pm</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 justify-center">
                    <div className="">
                        <img src={call} alt="" />
                    </div>
                    <div className="">
                        <p>Have a question?</p>
                        <p className='text-2xl'>+2546 251 2658</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 justify-center">
                    <div className="">
                        <img src={location} alt="" />
                    </div>
                    <div className="">
                        <p>Need a repair? our address</p>
                        <p className='text-2xl'>Liza Street, New York</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stat;