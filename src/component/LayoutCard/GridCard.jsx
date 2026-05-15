import Card from "../Cards/Card"
import {motion} from "motion/react"
const GridCard = ({ data, mediaType }) => {
    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center h-48">
                <p className="text-gray-500">No data available.</p>
            </div>
        );
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 py-2 pb-6">
            {data.map((item) => (
                <Card key={item?.id} item={item} mediaType={mediaType} />
            ))}
        </motion.div>
    );
}
export default GridCard;
