import Loading from "../component/Loading";
import Navbar from "../component/Navbar";
import PopularPerson from "../component/PopularPerson";
import usePeople from "../hooks/usePeople";

const People = () => {
    const {popular, loading, error} = usePeople();
    if (loading) return <Loading />
    if (error) return <p>Error Getting data</p>
    return (
        <>
        <Navbar solid/>
        <PopularPerson popular={popular} loading={loading} />
        </>
    )
}
export default People;