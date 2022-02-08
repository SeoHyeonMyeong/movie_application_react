import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ id, coverImage, title, genres, summary }) {
    return (
        <div >
            <img alt={title} src={coverImage}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>

    )}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieCard;