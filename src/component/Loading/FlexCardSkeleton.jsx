import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useRef } from "react";

const SkeletonLoading = ({ cards = 10 }) => {
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
        <div
            className="flex gap-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden py-2"
        >
            {Array.from({ length: cards }).map((_, index) => (
                <div key={index} className="w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 rounded-xl overflow-hidden bg-gray-900">
                    <Skeleton className="aspect-2/3 w-full" />
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoading;