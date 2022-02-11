import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieApp.module.css";

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
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : ( 
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.id}
                            id={movie.id}
                            coverImage={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            year={movie.year}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MovieApp;