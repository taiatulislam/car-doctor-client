import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo.svg'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/service'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="logo" className='h-[70px] w-[90px]' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <HiOutlineShoppingBag className='text-2xl mr-4'></HiOutlineShoppingBag>
                <CiSearch className='text-2xl mr-4'></CiSearch>
                <a className="btn border-2 border-[#FF3811] normal-case text-[#FF3811]">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;