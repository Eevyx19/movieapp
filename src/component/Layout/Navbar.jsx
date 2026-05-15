import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ solid = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.querySelector('.mobile-menu');

            if (navbar && navbar.contains(event.target)) {
                return;
            }

            if (menuBtn && !menuBtn.contains(event.target) && mobileMenu && !mobileMenu.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
<nav
    className={`navbar fixed top-0 left-0 right-0 z-50 mx-auto flex gap-4 justify-between items-center px-8 md:px-14 py-5 transition-all duration-300 text-white bg-gray-900
    ${
        solid
            ? "md:bg-gray-900 md:border-gray-800 md:shadow-md"
            : isScrolled
                ? "md:bg-gray-900/90 md:backdrop-blur-md md:shadow-md md:border-gray-800"
                : "md:bg-transparent md:border-gray-700"}`}>
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-5">
                    <div className="logo"><a href="/">Movie App</a></div>
                    <ul className="nav-links items-center hidden md:flex">
                        <li><a href="/movie" className="px-3 py-2 hover:text-blue-500 transition duration-200">Movies</a></li>
                        <li><a href="/tv" className="px-3 py-2 hover:text-blue-500 transition duration-200">TV Shows</a></li>
                        <li><a href="/person" className="px-3 py-2 hover:text-blue-500 transition duration-200">People</a></li>
                    </ul>
                </div>
                <div className="search-container flex items-center gap-4 relative z-10">
                    <button className="md:block text-white text-xl cursor-pointer hover:text-blue-500 px-2"><a href="/Search"><FontAwesomeIcon icon={faSearch} /></a>
                    </button>
                    <button id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} className="block md:hidden focus:outline-none">
                        <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu fixed h-full top-0 left-40 right-0 bg-gray-900 gap-0 md:hidden animate-in fade-in slide-in-from-right-50 duration-600">
                    <ul className="flex flex-col pt-16 px-1">
                        <li><a href="/movie" className="block w-full px-6 py-3 hover:bg-gray-700 hover:text-blue-500 transition duration-200">Movies</a></li>
                        <li><a href="/tv" className="block w-full px-6 py-3 hover:bg-gray-700 hover:text-blue-500 transition duration-200">TV Shows</a></li>
                        <li><a href="/person" className="block w-full px-6 py-3 hover:bg-gray-700 hover:text-blue-500 transition duration-200">People</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar

