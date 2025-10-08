
import {  NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import { IoLogoOctocat } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';


const Navber = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start pl-8">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
    <NavLink
      to="/" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Home
    </NavLink>
  </li>
        <li>
    <NavLink 
      to="/allapps" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Apps
    </NavLink>
  </li>
        
<li>
    <NavLink 
      to="/insapps" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Installation
    </NavLink>
  </li>
      </ul>
    </div>
    <img src={Logo} alt="" className='h-8 w-8' />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal px-1">
  <li>
    <NavLink
      to="/" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink 
      to="/allapps" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Apps
    </NavLink>
  </li>

  <li>
    <NavLink 
      to="/insapps" 
      className={({ isActive }) => isActive ? "border-b-2 font-semibold" : ""}
    >
      Installation
    </NavLink>
  </li>
</ul>

  </div>
  <div className="navbar-end pr-8">
    <a
                        href='https://github.com/parthodevroy/Hero-io-apps-assinment-eghit'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center space-x-2 btn bg-fuchsia-400 text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition'
                    >
                      <FaGithub/>
                      <span>Contribute</span>
                    </a>
  </div>
</div>
    );
};

export default Navber;