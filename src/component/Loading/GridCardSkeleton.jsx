import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards = 12 }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 py-2 pb-6">
            {Array.from({ length: cards }).map((_, index) => (
                <div key={index}className="bg-gray-900 rounded-xl overflow-hidden">
                    <Skeleton className="aspect-2/3 w-full overflow-hidden" />
                </div>
            ))}
        </div>
    );
};

export default CardSkeleton;