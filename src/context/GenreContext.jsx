import { createContext, useState, useEffect } from "react";
import { getGenreMovies, getGenreTvs } from "../api/api";

export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
     const [genre, setGenre] = useState ({});
   
       useEffect(() => {
           const loadGenre = async () => {
               try {
   
                   const [movieGenre, tvGenre] = await Promise.all([
                       getGenreMovies(),
                       getGenreTvs()
                   ])
                   const combined = [...movieGenre, ...tvGenre];
                   const genreMap = Object.fromEntries(
                       combined.map(g => [g.id, g.name])
                       
                   );
                   setGenre(genreMap)
               }
               catch (error) {
                   console.error('Error fetching genre:', error)
               }
           }
           loadGenre();
       }, []);
       return (
        <GenreContext.Provider value={genre}>
            {children}
        </GenreContext.Provider>
       )
   
}