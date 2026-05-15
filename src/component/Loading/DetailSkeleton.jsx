import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRef, useEffect } from "react";

const DetailSkeleton = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const wheelHandler = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener("wheel", wheelHandler, { passive: false });

        return () => {
            el.removeEventListener("wheel", wheelHandler);
        };
    }, []);

    return (
        <main className="Detail w-full bg-black">
            {/* Backdrop Section */}
            <section className="relative flex flex-col pb-6">
                <div className="relative w-full h-72 md:h-96">
                </div>

                {/* Poster and Details Section */}
                <div className="poster-detail relative -mt-40 flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 md:gap-6">
                    <div className="w-48 md:w-72 rounded-xl overflow-hidden shadow-2xl">
                        <Skeleton height="100%" width="100%" className="aspect-2/3" />
                    </div>
                    <div className="description py-6 flex flex-col w-full gap-1">
                        <Skeleton height={30} width="70%" className="ronded-xl" />
                        <Skeleton height={15} width="25%" className="rounded-xl" />
                        <div className="flex flex-wrap gap-2">
                            <Skeleton height={20} width={80} className="rounded-full" />
                            <Skeleton height={20} width={80} className="rounded-full" />
                            <Skeleton height={20} width={80} className="rounded-full" />
                        </div>
                            <Skeleton height={20} width={200} className="rounded-xl" />
                            <Skeleton height={20} width={250} className="rounded-xl" />
                            <Skeleton height={20} width={100} className="rounded-xl" />
                            <Skeleton height={70} width="100%" className="rounded-xl" />
                            <Skeleton height={30} width={80}className="rounded-xl" />
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col bg-black gap-4 px-4 md:px-16 py-4">
                <Skeleton height={30} width="25%" className="rounded-xl" />
                <div
                    ref={sliderRef}
                    className="flex overflow-hidden overflow-x-auto scroll-smooth no-scrollbar gap-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="w-40 md:w-50 lg:w-55 shrink-0 overflow-hidden">
                            <Skeleton className="aspect-2/3 w-full rounded-xl" />
                            <div className=" flex flex-col">
                                <Skeleton height={20} width="100%" className="rounded-xl" />
                                <Skeleton height={20} width="100%" className="rounded-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Videos Section */}
            <section className="w-full flex flex-col bg-black gap-4 px-4 md:px-16 py-4">
                <Skeleton height={20} width="25%" className="rounded-xl" />
                <Skeleton className="w-full aspect-video rounded-xl" />
            </section>

            {/* Backdrops Section */}
            <section className="w-full flex flex-col bg-black gap-4 px-4 md:px-16 py-4">
                <Skeleton height={20} width="25%" className="rounded-xl" />
                <Skeleton className="w-full aspect-video rounded-xl" />
            </section>

            {/* You May Also Like Section */}
            <section className="bg-gray-700 w-full px-4 py-4">
                <div className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 rounded-xl overflow-hidden">
                            <Skeleton className="aspect-2/3 w-full" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommendations Section */}
            <section className="bg-gray-700 w-full px-4 py-4">
                <div className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 rounded-xl overflow-hidden">
                            <Skeleton className="aspect-2/3 w-full" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default DetailSkeleton;