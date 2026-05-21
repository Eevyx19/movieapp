import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import useMedia from "../hooks/useMedia";
import Navbar from "../component/Layout/Navbar";
import React, { Suspense, useEffect } from "react";
import { motion } from "motion/react";
import CategorySkeleton from "../component/Loading/CategorySkeleton";
const CategoryCard = React.lazy(() => import("../component/Cards/CategoryCard"))

const CategoryPage = () => {

    const { mediaType, category } = useParams();

    const { media, page, setPage, totalPages } = useMedia();

    const data = media[mediaType]?.[category] || [];
    const totalPagination = Math.min(totalPages[mediaType]?.[category] || 0, 500);

    console.log(category    )

    console.log(media)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    const getPages = () => {
        const pages = [];
        const start = Math.max(1, page - 1);
        const end = Math.min(totalPagination, page + 1);

        if (start > 1) pages.push(1);
        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPagination - 1) pages.push("...");
        if (end < totalPagination) pages.push(totalPagination);

        return pages
    }

    const getLabel = (mediaType) => {
        if (mediaType === "movie") {
            return "Movie"
        }
        if (mediaType === "tv") {
            return "Tv Shows"
        }
    }

    return (
        <>
            <Navbar solid />
            <section className="w-full min-h-screen text-white bg-gray-600 mx-auto">
                <div className="w-full flex flex-col px-4 py-4 pt-10">
                    <div className="flex items-center gap-1 text-sm text-gray-300 pb-2 animate-slide delay-100">
                        <Link to="/" className="hover:text-white">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                        <span>/</span>
                        <Link
                            to={`/${mediaType}`}
                            className="hover:text-white capitalize"
                        >
                            {getLabel(mediaType)}
                        </Link>
                        <span>/</span>
                        <span className="text-white">
                            {category
                                .replace(/_/g, " ")
                                .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </span>
                    </div>
                    <h1 className="text-white text-2xl font-bold pb-4 animate-slide delay-200">{category
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}</h1>
                    <Suspense fallback={<CategorySkeleton cards={20} />}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className=" grid grid-cols-2 4xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                            {data.map((item) => (
                                <CategoryCard key={item.id} item={item} mediaType={mediaType} />
                            ))}
                        </motion.div>
                    </Suspense>
                    {data.length > 0 &&(
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
                                <span key={i} className="text-gray-400">
                                    ..
                                </span>
                            ) : (
                                <button
                                    key={i}
                                    onClick={() => setPage(p)}
                                    className={`px-2 py-1 ${page === p
                                        ? "bg-blue-600"
                                        : "bg-gray-800 text-sm hover:bg-gray-700"
                                        }`}>
                                    {p}
                                </button>
                            )
                        )}
                        <button
                            disabled={page === totalPagination}
                            onClick={() => setPage(page + 1)}
                            className={`text-xl px-2 transition-colors ${page === totalPagination ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}>
                            ›
                            </button>
                    </div>
                            )}
                </div>
            </section>
        </>
    );
};

export default CategoryPage;