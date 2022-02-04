import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MovieApp() {
    const [loading, setLodaing] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLodaing(false);
    }
    useEffect(() => {
        getMovies()
    }, []);
    
    // useEffect(() => {
    //     fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setMovies(json.datea.movies)
    //             setLodaing(false)
    //         });
    // }, []);
    
    return (
        <div>
            <h1>영화</h1>
            {loading ? (
                <h1>Loading...</h1> 
            ) : ( 
                <div>
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.id}
                            coverImage={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MovieApp;