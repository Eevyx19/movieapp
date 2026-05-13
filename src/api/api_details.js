export const getDetailsMovie = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error get movie details', error)
        throw error;
    }
}
export const getRecomendationMovies = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}/recommendations?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get Recomendation movies', error);
        throw error;
    }
}
export const getSimilarMovies = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}/similar?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get Similar movies', error);
        throw error;
    }
}
export const getCreditsMovies = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}/credits?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.cast
    }
    catch (error) {
        console.error.apply('Error get Credits movies', error);
        throw error;
    }
}
export const getImagesMovies = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}/images?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.backdrops;
    }
    catch (error) {
        console.error.apply('Error get Images movies', error);
        throw error;
    }
}
export const getVideosMovies = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/movie/${id}/videos?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error.apply('Error get Video movies', error);
        throw error;
    }
}

//Series
export const getDetailsSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error get tv details', error)
        throw error;
    }
}
export const getRecomendationSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}/recommendations?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get Recomendation movies', error);
        throw error;
    }
}
export const getSimilarSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}/similar?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results
    }
    catch (error) {
        console.error('Error get Similar movies', error);
        throw error;
    }
}
export const getCreditsSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}/credits?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.cast;
    }
    catch (error){
        console.error('Error get Credits data', error);
        throw error;
    }
}
export const getImagesSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}/images?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.backdrops;
    }
    catch (error){
        console.error('Error get Images data', error);
        throw error;
    }
}
export const getVideosSeries = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/tv/${id}/videos?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.results;
    }
    catch (error){
        console.error('Error get Videos data', error);
        throw error;
    }
}

//person
export const getDetailPerson = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/person/${id}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error('Error get Detail person data', error);
        throw error;
    }
}
export const getCombinedCreditsPerson = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/person/${id}/combined_credits?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data.cast;
    }
    catch (error){
        console.error('Error get Detail person is credits  data', error);
        throw error;
    }
}
export const getExternalIds = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_BASE}/person/${id}/external_ids?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error('Error get Detail person is social media data', error);
        throw error;
    }
}
