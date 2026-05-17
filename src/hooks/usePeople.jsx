import { useEffect, useState } from "react"
import { getPopularPeople } from "../api/api";

const usePeople = () => {
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const popularData = await getPopularPeople();
                setPopular(popularData)
            } catch(error) {
                console.error('error getting data', error);
                setError(error);
            }
        }
        fetchingData();
    }, [])
    return {popular, error};
}
export default usePeople