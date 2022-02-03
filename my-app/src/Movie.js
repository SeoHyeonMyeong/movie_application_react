import { useState, useEffect } from "react";

function Movie() {
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
                    <div key={movie.id}>
                        <img alt="cover_image" src={movie.medium_cover_image}/>
                        <h2>{movie.title}</h2>
                        <ul>
                            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
                        </ul>
                        <p>{movie.summary}</p>
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Movie;