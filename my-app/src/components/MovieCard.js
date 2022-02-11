import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css"

function MovieCard({ id, coverImage, title, genres, summary, year }) {
    return (
        <div className={styles.movieCard}>
            <img className={styles.movieCard__image} alt={title} src={coverImage}/>
            <div className={styles.movieCard__data}>
                <h2 className={styles.movieCard__title}>
                    <Link to={process.env.PUBLIC_URL + `/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movieCard__year}>{year}</h3>
                <ul className={styles.movieCard__genres}>
                    {genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <p className={styles.movieCard__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            </div>
        </div>

    )}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
}

export default MovieCard;