import { useContext, useEffect, useState } from 'react'
import { getSearch } from '../api/api';
import Navbar from "../component/Layout/Navbar";
import Searchbar from "../component/Search/Searchbar";
import Footer from '../component/Layout/Footer';
const Search = () => {
    const [resultLists, setResultLists] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOnSearch = async (value) => {
        setSearchValue(value);
    }
    useEffect(() => {
        if(searchValue.trim() === ""){
            setResultLists([]);
            setLoading(false)
            return;
        }
        setLoading(true);
        const debounceSearch = setTimeout(async () => {
            setLoading(true);
            try {
                const resultsData = await getSearch(searchValue);
                setResultLists(resultsData);
            } catch(error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        }, 700);
        return () => clearTimeout(debounceSearch);
    }, [searchValue])


    return (
        <>
            <Navbar solid />
            <Searchbar results={resultLists} loading={loading} onSearchChange={handleOnSearch} />
            <Footer />
        </>
    )
}
export default Search;