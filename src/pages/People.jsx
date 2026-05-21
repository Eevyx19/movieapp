import Loading from "../component/Loading/Loading";
import Navbar from "../component/Layout/Navbar";
import usePeople from "../hooks/usePeople";
import Footer from "../component/Layout/Footer";
import CategorySkeleton from "../component/Loading/CategorySkeleton";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { useEffect, Suspense } from "react";

const People = () => {
    const { popular, loading, page, setPage, totalPages, error } = usePeople();
    const getPages = () => {
        const pages = [];

        const start = Math.max(1, page - 1);
        const end = Math.min(totalPages, page + 1);

        if (start > 1) pages.push(1);
        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) pages.push("...");
        if (end < totalPages) pages.push(totalPages);

        return pages;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);


    if (error) return <p>Error Getting data</p>
    return (
        <>
            <Navbar solid />
            <section className="container-people w-full min-h-screen bg-gray-600">
                <div className="pt-12 px-4 md:px-14">
                    <div className="flex items-center gap-1 text-sm text-gray-300 pb-2 animation-slide delay-100">
                        <Link to="/" className="hover:text-white">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                        <span>/</span>
                        <Link to={"/person"} className="hover:text-white capitalize"
                        >person
                        </Link>
                    </div>
                    <h1 className="text-white font-bold text-base sm:text-2xl md:text-3xl sm:mb-4 md:mb-10 animate-slide delay-100">Popular Person</h1>
                    {loading ? (<CategorySkeleton cards={20} />)
                        : (<motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 py-2 pb-6">
                            {popular?.map((item) => (
                                <Link
                                    key={item?.id}
                                    to={`/person/${item.id}`}
                                    className="bg-gray-800 rounded-lg overflow-hidden">
                                    <img src={item?.profile_path ?
                                        `${import.meta.env.VITE_API_IMAGE_POSTER}/${item?.profile_path}` : "/empty-image.jpg"} alt={item?.name}/>
                                    <div className="text-center w-full py-2 px-2">
                                        <p className="text-white text-xs sm:text-sm font-semibold truncate">
                                            {item?.name}
                                        </p>
                                        <p className="text-gray-400 text-xs text-center whitespace-normal wrap-break-word leading-tight">
                                            {item?.known_for_department}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>)
                    }
                    {!loading && popular.length > 0 && (
                        <div className="text-white py-6">
                            <h2 className="text-center">Page {page}/{totalPages}</h2>
                            <div className="flex justify-center gap-0 py-4 mt-auto">
                                <button
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                    className={`text-xl px-2 transition-colors ${page === 1 ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                        }`}>
                                    ‹
                                </button>
                                {getPages().map((p, i) =>
                                    p === "..." ? (
                                        <span key={i} className="px-2 text-gray-400">
                                            ..
                                        </span>
                                    ) : (
                                        <button
                                            key={i}
                                            onClick={() => setPage(p)}
                                            className={`px-3 py-1 ${page === p
                                                ? "bg-blue-600 text-white "
                                                : "bg-gray-800 text-sm hover:bg-gray-700"
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    )
                                )}
                                <button
                                    disabled={page === totalPages}
                                    onClick={() => setPage(page + 1)}
                                    className={`text-xl px-2 transition-colors ${page === totalPages ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                        }`}>
                                    ›
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
export default People;