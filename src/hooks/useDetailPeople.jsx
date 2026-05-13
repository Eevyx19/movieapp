import { useEffect, useState } from "react";
import { getCombinedCreditsPerson, getDetailPerson, getExternalIds } from "../api/api_details";

const useDetailPeople = (id) => {
    const [detail, setDetail] = useState(null);
    const [combinedCredits, setCombinedCredits] = useState([]);
    const [externalIds, setExternalIds] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                setLoading(true)
                const [detailData, creditsData, externalIdsData] = await Promise.all([
                    getDetailPerson(id),
                    getCombinedCreditsPerson(id),
                    getExternalIds(id)
                ])
                setDetail(detailData);
                setCombinedCredits(creditsData);
                setExternalIds(externalIdsData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchingData();
        }
    }, [id])
    return {detail, combinedCredits, externalIds, loading, error};
}
export default useDetailPeople;