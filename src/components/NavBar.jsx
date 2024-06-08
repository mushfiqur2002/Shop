import { useState } from 'react';
import { Link } from "react-router-dom";
import logoImage from "../assets/logo/shop_logo.png"

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const links = <>
        <Link to='/'>Home</Link>
        {/* <Link to='/about'>About Us</Link> */}
        {/* <Link to='/blog'>Blog</Link> */}
        <Link to='/shop'>Shop</Link>
        <Link to='/contact'>Contact Us</Link>
    </>;

    return (
        <div className="navbar primary w-full py-5 px-5 sticky top-0 z-20">
            <div className="flex-1">
                <img src={logoImage} className='w-16 h-16 rounded-full ring p-2'></img>
                <h1 className="lora-font pl-3 text-2xl font-bold">Ruma <br></br>Traders</h1>
            </div>
            <div className="flex gap-3">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl gap-5">
                        {links}
                    </ul>
                </div>
                <div className="relative">
                    <label className="swap swap-rotate lg:hidden">
                        {/* this hidden checkbox controls the state */}
                        <input 
                            type="checkbox" 
                            checked={dropdownOpen} 
                            onChange={toggleDropdown} 
                        />

                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

                        {/* close icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                    {dropdownOpen && (
                        <ul 
                            tabIndex={0} 
                            className="menu menu-sm dropdown-content mt-8 z-[1] shadow secondary w-80 h-[100vh] absolute right-[-20px] text-2xl font-bold gap-10 pl-12 pt-12"
                        >
                            {links}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
