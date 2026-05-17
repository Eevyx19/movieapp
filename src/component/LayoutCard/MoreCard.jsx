import { Link } from "react-router";
import React, { Suspense } from "react";
import { motion } from "motion/react";
import ViewCardSkeleton from "../Loading/ViewCardSkeleton";

const ViewCard = React.lazy(() => import("../Cards/ViewCard"));

const MoreCard = ({ data, title }) => {
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
            </div>
        </section>
    )
}
export default MoreCard;