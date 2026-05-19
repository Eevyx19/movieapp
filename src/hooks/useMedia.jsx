import { useContext, useEffect, useState, useMemo } from "react";
import { getAiringTodayTv, getPopularMovies, getPopularTv, getTopRatedMovies, getTrendingMovies, getTrendingTv, getUpcomingMovies } from "../api/api";
import { GenreContext } from "../context/GenreContext";
import { useSearchParams } from "react-router";

const mediaServices = {
    movies: {
        trending: getTrendingMovies,
        popular: getPopularMovies,
        topRated: getTopRatedMovies,
        upComing: getUpcomingMovies
    },
    tv: {
        trending: getTrendingTv,
        popular: getPopularTv,
        topRated: getPopularTv,
        airing: getAiringTodayTv
    }
}

const useMedia = () => {
    const [media, setMedia] = useState({
        movies: {},
        tv: {}
    })

    const [totalPages, setTotalPages] = useState({
        movies: {},
        tv: {}
    })

    const [searchParams] = useSearchParams();
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
            movies: {
                trending: formatGenres(media.movies.trending),
                popular: formatGenres(media.movies.popular),
                topRated: formatGenres(media.movies.topRated),
                upComing: formatGenres(media.movies.upComing),
            },
            tv: {
                trending: formatGenres(media.tv.trending),
                popular: formatGenres(media.tv.popular),
                topRated: formatGenres(media.tv.topRated),
                airing: formatGenres(media.tv.airing)
            }
        }
    }, [media, genre])

    return { media: formattedMedia, totalPages, error };

}
export default useMedia;