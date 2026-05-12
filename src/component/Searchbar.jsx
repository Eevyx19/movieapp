const Searchbar = ({ onSearchChange, results }) => {
    return (
        <>
            <div className="flex-col items-center justify-center text-center w-full min-h-screen py-25 px-6 gap-10 bg-gray-600 overflow-auto">
                <div className="container-search w-full flex-col item-center justify-center mb-10">
                    <h1 className="p-2 mb-2 text-3xl text-white">Search Movie or TV Series</h1>
                    <div className="relative">
                        <input onChange={({ target }) => onSearchChange(target.value)} type="text" placeholder="Search Movie" className="w-full xs:max-w-100 bg-gray-400 text-lg rounded-lg px-2 overflow-auto" />
                    </div>
                </div>
                <div className="container-results flex flex-wrap item-center justify-center gap-4">
                    {
                        results.map((movie, index) => (
                            <div key={index} className="card-results max-w-full 2xs:max-w-60 bg-gray-900 rounded-lg overflow-hidden">
                                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                                <div className="h-40 flex flex-col items-center justify-center text-center px-2 py-2 text-white">
                                    <h3 className="text-2xl py-2 line-clamp-1">
                                        {movie?.title?.toUpperCase() || movie?.name?.toUpperCase()}
                                    </h3>
                                    <p className="py-1 line-clamp-1">{movie?.genres}</p>
                                    <p className="py-1">{movie?.media_type?.toUpperCase()}</p>
                                    <p className="text-yellow-400 py-1">
                                        ★<span className="text-white">{movie?.vote_average}/10</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
export default Searchbar;