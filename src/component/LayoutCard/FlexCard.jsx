import Card from "../Cards/Card";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"
const FlexCard = ({ data, mediaType }) => {
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
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={sliderRef} className="flex flex-nowrap overflow-x-scroll scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-2 py-2">
            {data.map(item => (
                <div className="flex shrink-0 w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60" key={item?.id}>
                    <Card item={item} mediaType={mediaType} />
                </div>
            ))}
        </motion.div>
    )
}
export default FlexCard;