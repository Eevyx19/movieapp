import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useMedia from "../../hooks/useMedia";
import { Link, useLocation } from "react-router";

const Navbar = ({ solid = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { media, category } = useMedia();
    const location = useLocation();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedButton = buttonRef.current?.contains(event.target);
            const clickedMenu = menuRef.current?.contains(event.target);

            if (clickedButton || clickedMenu) return;

            setIsMenuOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            ref={menuRef}
            className={`navbar sticky top-0 left-0 right-0 z-50 mx-auto flex justify-between items-center px-8 md:px-14 py-5 text-white bg-gray-900 border-b border-gray-700 transition-all duration-300
            ${solid
                    ? "md:bg-gray-900 md:shadow-md"
                    : isScrolled
                        ? "md:bg-gray-900/90 md:backdrop-blur-md md:shadow-md"
                        : ""
                }`}>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center">
                    <div className="logo">
                        <Link to="/"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">Movieapp</span></Link>
                    </div>
                </div>
                <ul className="w-96 hidden md:flex justify-around">
                    <li className="relative group"><Link to="/movie" className={`transition-colors duration-200 ${location.pathname.startsWith("/movie") ? "text-blue-400 border-b-2 border-blue-400 pb-1" : "hover:text-blue-400"}`}>Movies</Link>
                        <ul className="absolute -left-5 top-full py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-gray-800 rounded shadow-lg">
                            <li className="flex flex-col w-28">
                                {Object.entries(media.movie).map(([category]) => (
                                    <Link className="py-1 px-4" key={category} to={`/movie/category/${category}`}>{category
                                        .replace(/_/g, " ")
                                        .replace(/\b\w/g, (char) => char.toUpperCase())}</Link>
                                ))}
                            </li>
                        </ul>
                    </li>
                    <li className="relative group"><Link to="/tv" className={`transition-colors duration-200 ${location.pathname.startsWith("/tv") ? "text-blue-400 border-b-2 border-blue-400 pb-1" : "hover:text-blue-400"}`}>TV Shows</Link>
                        <ul className="absolute -left-5 top-full py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-gray-800 rounded shadow-lg">
                            <li className="flex flex-col w-38">
                                {Object.entries(media.tv).map(([category]) => (
                                    <Link className="py-1 px-4" key={category} to={`/tv/category/${category}`}>{category
                                        .replace(/_/g, " ")
                                        .replace(/\b\w/g, (char) => char.toUpperCase())}</Link>
                                ))}
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/person" className={`transition-colors duration-200 ${location.pathname.startsWith("/person") ? "text-blue-400 border-b-2 border-blue-400 pb-1" : "hover:text-blue-400"}`}>People</Link></li>
                </ul>
                <div className="flex items-center gap-4">
                    <a href="/search">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                    </a>
                    <button
                        ref={buttonRef}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden focus:outline-none"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-400 mb-1 transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-400 mb-1 transition ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-400 transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`absolute left-0 right-0 top-full bg-gray-900 md:hidden overflow-hidden transition-all duration-300
                ${isMenuOpen ? "h-34 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col">
                    <li><Link className={`transition-colors duration-200 ${location.pathname.startsWith("/movie") ? "px-10 text-blue-400 border-b-2 border-blue-400 pb-1" : "block px-6 py-3"}`} to="/movie">Movies</Link></li>
                    <li><Link className={`transition-colors duration-200 ${location.pathname.startsWith("/tv") ? "px-10 text-blue-400 border-b-2 border-blue-400 pb-1" : "block px-6 py-3"}`} to="/tv">TV Shows</Link></li>
                    <li><Link className={`transition-colors duration-200 ${location.pathname.startsWith("/person") ? "px-10 text-blue-400 border-b-2 border-blue-400 pb-1" : "block px-6 py-3"}`} to="/person">People</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;