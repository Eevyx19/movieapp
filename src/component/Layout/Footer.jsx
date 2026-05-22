import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="container-footer w-full px-4 md:px-14 bg-gray-900">
            <div className="footer grid grid-cols-2 md:grid-cols-3 justify-center gap-2">
                <div className="col-span-2 sm:col-span-3 md:col-auto caption py-6 text-center text-white mx-10 sm:mx-0">
                    <h2 className="text-2xl py-2"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">Movieapp</span></h2>
                    <div className="w-full">
                        <p>Discover Movie, Tv Shows or even People in Movieapp. <br />Keep control of everything you watch</p>
                    </div>
                    <div className="social flex justify-center gap-4 pt-2">
                        <a href="https://github.com/Eevyx19"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://instagram.com/eevyx00"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://tiktok.com/@eevyx43"><FontAwesomeIcon icon={faTiktok} /></a>
                    </div>
                </div>
                <div className="browse flex flex-col items-start md:items-center py-6 px-4 text-white">
                    <h2 className="text-2xl text-blue-500 py-2">Browse</h2>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/movie"}>Movie</Link></li>
                        <li><Link to={"/tv"}>TV Shows</Link></li>
                        <li><Link to={"/person"}>People</Link></li>
                    </ul>
                </div>
                <div className="search flex flex-col items-start md:items-center py-6 px-4 text-white">
                    <h2 className="text-2xl text-blue-500 py-2">Search</h2><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search </Link>
                </div>
            </div>
            <div className="production flex flex-col sm:flex-row justify-around border-t-2 border-gray-500 text-center text-sm text-white py-4">
                <h2>Powered by <a className="underline" href="https://developer.themoviedb.org/docs/getting-started">TMDB</a></h2>
                <h2>©️2026 movieapp. All rights reserved</h2>
                <a className="underline" href="#">Terms of Use</a>
            </div>
        </footer>
    )
}
export default Footer