import Loading from "../component/Loading/Loading";
import Navbar from "../component/Layout/Navbar";
import MoreCard from "../component/LayoutCard/MoreCard";
import usePeople from "../hooks/usePeople";
import Footer from "../component/Layout/Footer";

const People = () => {
    const {popular, page, setPage, totalPages, error} = usePeople();
    if (error) return <p>Error Getting data</p>
    return (
        <>
        <Navbar solid/>
        <MoreCard data={popular} page={page} setPage={setPage} totalPages={totalPages} title="Popular People"/>
        <Footer />
        </>
    )
}
export default People;