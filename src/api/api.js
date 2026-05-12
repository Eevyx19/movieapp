//Home
export const getAllTrending = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/trending/all/day?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching trending all:', error);
        throw error;
    }
};
export const getNowPlayingMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/now_playing?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.log('Error fetching now playing movies'.error)
        throw error;
    }
};
export const getOnTheAir = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/on_the_air?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.log('Error fetching Tv Airing Today'.error)
        throw error;
    }
}

//Movies
export const getTrendingMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/trending/movie/day?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
}

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/popular?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
};

export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/top_rated?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching top rated movies:', error);
        throw error;
    }
}

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/upcoming?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching upcoming movies:', error);
        throw error;
    }
}

//Genre
export const getGenreMovies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/genre/movie/list?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.genres;
    }
    catch (error) {
        console.error('Error,', error)
        throw error;
    }
}

export const getGenreTvs = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/genre/tv/list?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json()
        return data.genres
    }
    catch (error) {
        console.log('Error', error)
    }
}

export const getSearch = async (value) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/search/multi?query=${value}&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json()
        return data.results;
    }
    catch (error) {
        console.error('Error searching movies', error)
        throw error;
    }
}

//Tv Series
export const getTrendingTv = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/trending/tv/day?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get trending Tv data', error);
        throw error;
    }
}
export const getPopularTv = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/popular?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get popular tv data', error);
        throw error;
    }
}
export const getTopRatedTv = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/top_rated?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get top rated Tv data', error);
        throw error;
    }
}
export const getAiringTodayTv = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/airing_today?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get airing today Tv data', error);
        throw error;
    }
}

//Details Movie

//Details Series
