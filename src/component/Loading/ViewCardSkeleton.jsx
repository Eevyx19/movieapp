import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ViewCardSkeleton = ({ cards = 20 }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 pb-6 ">
            {Array.from({ length: cards }).map((_, index) => (
                <div key={index} className="rounded-xl">
                    <Skeleton className="aspect-2/3 w-full overflow-hidden mb-2" />
                    <div className="flex flex-col gap-0">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ViewCardSkeleton;