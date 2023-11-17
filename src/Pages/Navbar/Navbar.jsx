import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
        {/* <li><NavLink to='/addbrand'>Add Brand</NavLink></li> */}
    </>
   const handleLogout = () => {
    logOut()
    .then(() => {
        toast.success('Log Out Successfully! ')
    })
   }
    return (

        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src="https://i.ibb.co/dKgdzGq/Zen-Tech-removebg-preview.png" className="w-28 h-28" alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {/* <a className="btn">Button</a> */}
                    <div>
                        {
                            user ? <p>{user.displayName}</p> : ""
                        }
                    </div>
                    <div className="w-10">
                        <img className="rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <div>
                        {
                            user ? <p className="cursor-pointer" onClick={handleLogout}>Log Out</p>
                            : <Link to='/login'>Log In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;