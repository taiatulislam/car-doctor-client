import login from '../../assets/images/login/login.svg'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div>
            <div className="flex items-center pb-20">
                <div className="w-1/2">
                    <img src={login} alt="" className='w-4/5' />
                </div>
                <div className="w-1/2 border-2 border-[#D0D0D0] rounded-lg p-16">
                    <h3 className='text-4xl font-semibold mb-10 text-center'>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p className='mb-4'>Email:</p>
                            <input type="text" name="email" placeholder='Your Email' className='border-[#E8E8E8] border-2 w-full py-2 pl-5' />
                        </label>
                        <label>
                            <p className='my-5'>Confirm Password:</p>
                            <input type="password" name="password" placeholder='Your Password' className='border-[#E8E8E8] border-2 w-full py-2 pl-5' />
                        </label>
                        <br />
                        <input type="submit" value="Sign In" className='mt-5 text-white w-full py-3 bg-[#FF3811]' />
                    </form>
                    <p className='my-5 text-center'>Or Sign In with</p>
                    <div className='flex gap-5 justify-center'>
                        <BiLogoFacebook className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoFacebook>
                        <BiLogoLinkedin className='text-blue-700 bg-base-300 p-2 rounded-full text-4xl'></BiLogoLinkedin>
                        <FcGoogle className='bg-base-300 p-2 rounded-full text-4xl'></FcGoogle>
                    </div>

                    <p className='text-center mt-8'>Have an account? <Link className='text-[#FF3811]'>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;