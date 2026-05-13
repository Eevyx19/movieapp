import { useEffect, useState } from "react"
import { getPopularPeople } from "../api/api";

const usePeople = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchingData = async () => {
            setLoading(true);
            try {
                const popularData = await getPopularPeople();
                setPopular(popularData)
            } catch(error) {
                console.error('error getting data', error);
                setError(error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchingData();
    }, [])
    return {popular, loading, error};
}
export default usePeople