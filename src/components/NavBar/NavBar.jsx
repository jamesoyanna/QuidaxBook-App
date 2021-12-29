import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';

import logoblack from '../../assets/image/logo-black.png';
import logowhite from "../../assets/image/logo-white.png";


import { useCartCounter } from "../../contexts/CartContext";
//import SearchBox from './../Search/SearchBox';

const NavBar = () => {
  const {cartCounter} = useCartCounter();

    return (
      <>
       <div className="w-full h-full">
        <header className="w-full navbar bg-white">
          <nav className="w-full h-full p-4 shadow-sm">
            <div className="navbar-wrapper w-full h-full">
              <div className="nav-left h-full">
                <Link to="/">
                <div className="logo-container w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden bg-black cursor-pointer">
                  <img src={logowhite} className="w-4 md:w-6" alt="Quidax" />
                </div>
                </Link>
                <div className="logo-title">
                  <h2 className="text-lg font-semibold text-dark">
                    Quidax Books
                    <br />
                    <span
                      style={{ fontStyle: "italic" }}
                      className="text-sm font-thin text-gray-light"
                    >
                      A flimsy book company
                    </span>
                  </h2>
                  
                </div>
                  
              </div>
              
              <div className="search-container">
                <div className="w-6 h-6 mr-4 back-icon search-close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-black"
                  >
                    <path
                      className="heroicon-ui"
                      d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
                    />
                  </svg>
                </div>
            
                <div className="search-box h-10 relative bg-white">
                  {/* <SearchBox /> */}
                  <input
                    id="search-input"
                    type="text"
                    className="search-input w-full h-10 text-sm text-gray-dark font-light p-4"
                    placeholder="Search books, genres, authos,etc."
                  />
                  <span className="absolute w-10 h-10 flex inset-right-0 border-left bg-gray-lighter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current text-black"
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="nav-right h-full">
                <div
                  id="search-open"
                  className="item-toggle nav-item w-6 h-6 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-black"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <div className="nav-item w-8 h-8 rounded-full overflow-hidden bg-white cursor-pointer">
                  <img src={logoblack} className="w-4 md:w-6" alt="Quidax" />
                </div>
                <div className="nav-item w-6 h-6 md:w-8 md:h-8 rounded-full bg-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="absolute w-4 h-4 md:w-5 md:h-5 flex rounded-full font-bold inset-right bg-green text-sm text-white">
                    <span className="">{cartCounter}</span>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
        
      </>
    );
}

export default NavBar;
