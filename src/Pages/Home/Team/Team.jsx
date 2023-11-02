import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
const Team = () => {
    return (
        <div className="text-center mt-28 max-w-7xl mx-auto">
            <p className="text-[#FF3811] text-xl font-medium mb-5">Team</p>
            <h2 className="text-5xl font-bold mb-5">Meet Our Team</h2>
            <p className="text-[#737373] w-1/2 mx-auto text-lg mb-12">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            <div className="grid grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={team1} alt="Service" className="rounded-xl h-[250px] bg-base-300 w-full" />
                    </figure>
                    <div className="p-5 pt-0">
                        <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
                        <p className="text-[#FF3811] font-semibold my-2">Engine Expert</p>
                        <div className='flex gap-5 justify-center mt-5'>
                            <BiLogoFacebook className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoFacebook>
                            <BiLogoLinkedin className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoLinkedin>
                            <FcGoogle className='bg-base-300 p-2 rounded-full text-4xl'></FcGoogle>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={team2} alt="Service" className="rounded-xl h-[250px] bg-base-300 w-full" />
                    </figure>
                    <div className="p-5 pt-0">
                        <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
                        <p className="text-[#FF3811] font-semibold my-2">Engine Expert</p>
                        <div className='flex gap-5 justify-center mt-5'>
                            <BiLogoFacebook className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoFacebook>
                            <BiLogoLinkedin className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoLinkedin>
                            <FcGoogle className='bg-base-300 p-2 rounded-full text-4xl'></FcGoogle>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={team3} alt="Service" className="rounded-xl h-[250px] bg-base-300 w-full" />
                    </figure>
                    <div className="p-5 pt-0">
                        <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
                        <p className="text-[#FF3811] font-semibold my-2">Engine Expert</p>
                        <div className='flex gap-5 justify-center mt-5'>
                            <BiLogoFacebook className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoFacebook>
                            <BiLogoLinkedin className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoLinkedin>
                            <FcGoogle className='bg-base-300 p-2 rounded-full text-4xl'></FcGoogle>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;