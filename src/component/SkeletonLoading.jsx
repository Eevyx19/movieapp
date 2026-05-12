import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = ({ cards = 10 }) => {
    return Array.from({ length: cards }).map((_, index) => (
        <div
            key={index}
            className="w-30 2xs:w-35 4xs:w-40 md:w-50 lg:w-60 shrink-0 rounded-xl overflow-hidden bg-gray-800 animate-pulse">
            <Skeleton className="w-full aspect-2/3 bg-gray-700" />
            <div className="px-4 py-3 flex flex-col gap-2">
                <Skeleton className="h-4 bg-gray-700 rounded w-3/4" />
                <Skeleton className="h-4 bg-gray-700 rounded w-1/3" />
            </div>
        </div>
    ));
}
export default SkeletonLoading;

