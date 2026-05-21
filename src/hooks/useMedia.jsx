import { useContext, useEffect, useState, useMemo } from "react";
import { getAiringTodayTv, getPopularMovies, getPopularTv, getTopRatedMovies, getTrendingMovies, getTrendingTv, getUpcomingMovies } from "../api/api";
import { GenreContext } from "../context/GenreContext";
import { useSearchParams } from "react-router";

const mediaServices = {
    movie: {
        trending: getTrendingMovies,
        popular: getPopularMovies,
        top_rated: getTopRatedMovies,
        upcoming: getUpcomingMovies
    },
    tv: {
        trending: getTrendingTv,
        popular: getPopularTv,
        top_rated: getPopularTv,
        airing_today: getAiringTodayTv
    }
}

const useMedia = () => {
    const [media, setMedia] = useState({
        movie: {},
        tv: {}
    })

    const [totalPages, setTotalPages] = useState({
        movie: {},
        tv: {}
    })

    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const genre = useContext(GenreContext);

    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const mediaData = {}
                const pagesData = {}

                for (const [type, services] of Object.entries(mediaServices)) {
                    const entries = Object.entries(services)

                    const data = await Promise.all(
                        entries.map(([_, service]) => service(page))
                    )
                    mediaData[type] = {};
                    pagesData[type] = {};

                    entries.forEach(([key], index) => {
                        mediaData[type][key] = data[index].results;
                        pagesData[type][key] = data[index].total_pages;
                    })
                }
                setMedia(mediaData);
                setTotalPages(pagesData);

            } catch (error) {
                setError(error);
            }
        };
        fetchingData();
    }, [page])

    const formattedMedia = useMemo(() => {
        const formatGenres = (lists = []) =>
            lists.map((media) => ({
                ...media,
                genres: media.genre_ids
                    ?.map((id) => genre[id])
                    .filter(Boolean),
            }));
        return {
            movie: {
                trending: formatGenres(media.movie.trending),
                popular: formatGenres(media.movie.popular),
                top_rated: formatGenres(media.movie.top_rated),
                upcoming: formatGenres(media.movie.upcoming),
            },
            tv: {
                trending: formatGenres(media.tv.trending),
                popular: formatGenres(media.tv.popular),
                top_rated: formatGenres(media.tv.top_rated),
                airing_today: formatGenres(media.tv.airing_today)
            }
        }
    }, [media, genre])
    
    const setPage = (newPage) => {
        setSearchParams({page: newPage})
    }
    return { media: formattedMedia, page, setPage, totalPages, error };

}
export default useMedia;