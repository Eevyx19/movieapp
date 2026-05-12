import { useContext, useEffect, useState } from 'react'
import { getSearch } from '../api/api';
import Navbar from "../component/Navbar";
import Searchbar from "../component/Searchbar";
import Footer from '../component/Footer';
import { GenreContext } from '../context/GenreContext';
const Search = () => {
    const [listsTemp, setListsTemp] = useState ([]);
    const [moviesLists, setMoviesLists] = useState ([]);
    const genre = useContext(GenreContext);

    const handleOnSearch = async (value) => {
        const search = await getSearch(value)
        setListsTemp(search)
    }

    useEffect(() => {
    const result = listsTemp?.map(movie => ({
        ...movie,
        genres: movie.genre_ids
            ?.map(id => genre[id])
            .filter(Boolean)
            .join(", ")
    }));

    setMoviesLists(result);
}, [listsTemp, genre]);
    return (
        <>
            <Navbar />
            <Searchbar results={moviesLists} onSearchChange={handleOnSearch}/>
            <Footer />
        </>
    )
}
export default Search;