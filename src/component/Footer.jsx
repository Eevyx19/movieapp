import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer w-full px-4 md:px-14 bg-gray-900">
            <div className="container-footer grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                <div className="browse py-6 text-white">
                    <h2 className="text-2xl text-blue-500 py-2">Browse</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movie</a></li>
                        <li><a href="">Tv Series</a></li>
                        <li><a href="">Company</a></li>
                    </ul>
                </div>
                <div className="media-social py-6 text-white">
                    <h2 className="text-2xl text-blue-500 py-2">Social Media</h2>
                    <ul>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">TikTok</a></li>
                    </ul>
                </div>
                <div className="search py-6 text-white">
                    <h2 className="text-2xl text-blue-500 py-2">Search</h2>
                    <button className="md:block text-white text-xl cursor-pointer hover:text-blue-500 px-2"><a href="/Search"><FontAwesomeIcon icon={faSearch} /> Search </a>
                    </button>
                </div>
            </div>
            <div className="production flex flex-col sm:flex-row justify-around border-t-2 border-gray-500 text-center text-white py-4">
                    <h2>Powered by TMDB</h2>
                    <h2>©️moviereact 2026</h2>
                    <h2>Terms of Use</h2>
            </div>
        </footer>
    )
}
export default Footer