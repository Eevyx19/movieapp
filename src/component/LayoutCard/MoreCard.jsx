import { Link } from "react-router";
import React, { Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";
import ViewCardSkeleton from "../Loading/ViewCardSkeleton";
const ViewCard = React.lazy(() => import("../Cards/ViewCard"));

const MoreCard = ({ data, page, setPage, totalPages, title }) => {

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

    return (
        <section className="container-people w-full min-h-screen bg-gray-600">
            <div className="pt-20 md:pt-30 px-4 md:px-14">
                <h1 className="text-white font-bold text-base sm:text-2xl md:text-3xl sm:mb-4 md:mb-10 animate-slide delay-100">{title}</h1>
                <Suspense fallback={<ViewCardSkeleton cards={20} />}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 py-2 pb-6">
                        {data?.map((item) => (
                            <ViewCard key={item.id} item={item} />
                        ))}
                    </motion.div>
                </Suspense>
                <div className="text-white py-6">
                    <h2 className="text-center">Page {page}/{totalPages}</h2>
                    <div className="flex justify-center gap-1">
                        {getPages().map((p, i) =>
                            p === "..." ? (
                                <span key={i} className="px-2 text-gray-400">
                                    ..
                                </span>
                            ) : (
                                <button
                                    key={i}
                                    onClick={() => setPage(p)}
                                    className={`px-3 py-1 rounded-lg ${page === p
                                            ? "bg-blue-600 text-white "
                                        : "bg-gray-800 text-sm hover:bg-gray-700"
                                        }`}
                                >
                                    {p}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MoreCard;