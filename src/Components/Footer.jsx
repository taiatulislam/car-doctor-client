import logo from '../../src/assets/logo.svg'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';

const Footer = () => {
    return (
        <div className='bg-[#878787] mt-20'>
            <footer className="footer gap-10 py-20 max-w-7xl mx-auto">
                <aside className='w-1/2'>
                    <img src={logo} alt="logo" className='' />
                    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.</p>
                    <div className='flex gap-5 justify-center mt-3'>
                        <BiLogoFacebook className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoFacebook>
                        <BiLogoLinkedin className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoLinkedin>
                        <FcGoogle className='bg-base-300 p-2 rounded-full text-4xl'></FcGoogle>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accessibility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;