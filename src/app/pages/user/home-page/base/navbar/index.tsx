import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Navbar: React.FC<any> = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid navbar__container">
          <div className='navbar__leftSide'>
            <Link to="/" className="navbar-brand">
              PROSHOP
            </Link>

            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Product ..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="navbar__content">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                  <i className="fa-solid fa-cart-shopping"></i> CART
                  </a>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={"/sign-in"}>
                  <i className="fa-solid fa-user"></i> SIGN IN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
