import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* header logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      {/* adress selection */}

      <div className="header__adress">
        <Link to="/" className="header__li">
          <AddLocationIcon className="header__location" />

          <div className="header__adresslocation">
            <span className="header__optionlineOneL">Hello</span>
            <span className="header__optionlineTwo">Select your adress</span>
          </div>
        </Link>
      </div>

      <div className="header__search">
        <input type="text" className="header__SearchBar" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* header search bar */}

      {/* nav 3 links */}

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          {/* 1st link */}
          <div onClick={login} className="header__option">
            <span className="header__optionlineOne">Hello🎃 {user?.email} </span>
            <span className="header__optionlineTwo">  {user ? "Sign Out" : "Sign in"}</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">Return</span>
            <span className="header__optionlineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne"> Your</span>
            <span className="header__optionlineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* add bucket basket */}
      <Link to="checkout" className="header__link">
        <div className="header__OptionsBasket">
          {/* Shoping basket icon */}
          <ShoppingBasketIcon />
          {/* Shoping item count */}
          <span className="header__OptionsBasketCount">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
