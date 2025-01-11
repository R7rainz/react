import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Github, Dribbble, DiscIcon as Discord } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-orange-50 to-pink-50">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16 transform hover:scale-105 transition-transform duration-300"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-orange-600 transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-orange-600 transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/R7rainz"
                                        className="hover:text-orange-600 transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://discord.gg/34NwFk3heK"
                                        className="hover:text-orange-600 transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:text-orange-600 transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-orange-600 transition-colors duration-300">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:text-orange-600 ml-1 transition-colors duration-300">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                            <Facebook className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                            <Discord className="w-5 h-5" />
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                            <Dribbble className="w-5 h-5" />
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

