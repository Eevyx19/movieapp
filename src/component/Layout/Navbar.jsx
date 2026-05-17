import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ solid = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            className={`navbar fixed top-0 left-0 right-0 z-50 mx-auto flex justify-between items-center px-8 md:px-14 py-5 text-white bg-gray-900 transition-all duration-300
            ${solid
                    ? "md:bg-gray-900 md:shadow-md"
                    : isScrolled
                        ? "md:bg-gray-900/90 md:backdrop-blur-md md:shadow-md"
                        : "md:bg-transparent"
                }`}>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="logo">
                        <a href="/">Movie App</a>
                    </div>

                    <ul className="hidden md:flex gap-4">
                        <li><a href="/movie">Movies</a></li>
                        <li><a href="/tv">TV Shows</a></li>
                        <li><a href="/person">People</a></li>
                    </ul>
                </div>

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
                ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col">
                    <li><a className="block px-6 py-3" href="/movie">Movies</a></li>
                    <li><a className="block px-6 py-3" href="/tv">TV Shows</a></li>
                    <li><a className="block px-6 py-3" href="/person">People</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;