import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { toast } from 'react-toastify';
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userPhoto from "../assets/user.png"


const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const {user, logoutUser} = useContext(AuthContext);

    const handleSignOut = () => {
        logoutUser()
            .then(result => {
                console.log(result)
                toast.success("Logged out successfully!")
            })
            .catch(err => console.error(err));
    }


    const handleTheme = (e) => {
        const selectedTheme = e.target.checked ? 'dark' : 'light';
        setTheme(selectedTheme)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const navLinks = <>
        <li><NavLink to='/' className={'text-[16px] font-bold'}>Home</NavLink></li>
        <li><NavLink to='/allBlogs' className={'text-[16px] font-bold'}>All Blogs</NavLink></li>
        <li><NavLink to='/addBlog' className={'text-[16px] font-bold'}>Add Blog</NavLink></li>
        <li><NavLink to='/featured' className={'text-[16px] font-bold'}>Featured Blogs</NavLink></li>
        <li><NavLink to='/wishlist' className={'text-[16px] font-bold'}>Wishlist</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md lg:px-16 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-serif">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="text-xl md:text-3xl font-bold font-serif"><span className="text-[#F95A65]">Web</span> Wonders</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-serif font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-4 flex items-center">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onClick={handleTheme} type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
                {
                    user ?
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full tooltip" title={user?.displayName}>
                                    <img alt="user" src={user?.photoURL || userPhoto} />
                                </div>
                            </div>
                            <ul tabIndex={0} className=" z-[1] w-48 shadow menu menu-lg  dropdown-content bg-base-100 rounded-lg ">
                                <li><a>{user.displayName}</a></li>
                                <li className="bg-[#F95A65] hover:bg-[#f24652] text-white rounded-lg" onClick={handleSignOut}><a><CiLogout /> Logout</a></li>
                            </ul>
                        </div> :
                        <div className="space-x-3 flex">
                            <Link to='/login'><button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-3 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Login</span>
                            </span>
                        </button></Link>
                            <Link to='/registration'><button className="relative p-0.5  items-center justify-center font-bold overflow-hidden group rounded-md hidden md:flex">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-3 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Register</span>
                            </span>
                        </button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;