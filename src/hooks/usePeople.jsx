import { useEffect, useState } from "react"
import { getPopularPeople } from "../api/api";
import { useSearchParams } from "react-router";

const usePeople = () => {
    const [popular, setPopular] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const popularData = await getPopularPeople(page);
                setPopular(popularData.results);
                setTotalPages(Math.min(popularData.total_pages, 500));

            } catch(error) {
                console.error('error getting data', error);
                setError(error);
            }
        }
        fetchingData();
    }, [page])


    const setPage = (newPage) => {
        setSearchParams({page: newPage})
    }

    return {popular, page, setPage, totalPages, error};
}
export default usePeople