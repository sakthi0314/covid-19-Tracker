import React from "react";
import Logo from "../Assets/Logo.svg";
import Dropdown from "../../Components/Dropdown/Dropdown";
import "./Navbar.scss";
import { useAuth } from "../../Contexts/AuthContext";

function Navbar() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          c
          <img src={Logo} alt='logo' />
          ovid tracker
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
