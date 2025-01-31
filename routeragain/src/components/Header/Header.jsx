import { Link, NavLink } from "react-router-dom"
import React from "react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-10 rounded-full"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white hover:text-indigo-200 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-indigo-800 bg-white hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition duration-300"
            >
              Get started
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-indigo-200" : "text-white"} border-b border-indigo-400 hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 hover:text-indigo-200 lg:p-0 transition`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-indigo-200" : "text-white"} border-b border-indigo-400 hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 hover:text-indigo-200 lg:p-0 transition`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-indigo-200" : "text-white"} border-b border-indigo-400 hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 hover:text-indigo-200 lg:p-0 transition`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

