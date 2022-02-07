import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ coverImage, title, genres, summary }) {
    return (
        <div >
            <img alt={title} src={coverImage}/>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>

    )}

MovieCard.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieCard;