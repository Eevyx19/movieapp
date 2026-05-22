import React  from "react";
import SearchSkeletonCard from "../Loading/SearchSkeltonCard";
import SearchCard from "../Cards/SearchCard";

const Searchbar = ({ onSearchChange, results, loading }) => {
    const movies = results?.filter((item) => item?.media_type === "movie");
    const tv = results?.filter((item) => item?.media_type === "tv");
    return (
        <>
            <div className="flex-col items-center justify-center text-center w-full min-h-screen py-20 px-6 gap-10 bg-dark overflow-auto">
                <div className="container-search w-full flex-col item-center justify-center mb-10">
                    <h1 className="p-2 mb-2 text-xl text-white">Search Movie or Series</h1>
                    <div className="relative">
                        <input onChange={({ target }) => onSearchChange(target.value)} type="text" placeholder="Search..." className="w-full md:w-[80%] border-0 border-b border-gray-400 text-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-blue-500 px-4 py-2" />
                    </div>
                </div>
                <h2 className="col-span-full text-xl font-semibold text-start text-white mb-4">{movies.length > 0 ? "Top Movies Results" : ""}</h2>
                {loading ? <SearchSkeletonCard cards={8} /> : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {movies?.map((item) => (
                            <SearchCard key={item?.id} item={item} />
                        ))}
                    </div>
                    )}
                <h1 className="col-span-full text-xl font-semibold text-start text-white mb-4 pt-10">{tv.length > 0 ? "Top TV Series Results" : ""}</h1>
                {loading ? <SearchSkeletonCard cards={8} /> : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {tv?.map((item) => (
                            <SearchCard key={item?.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default Searchbar;