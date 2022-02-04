import PropTypes from "prop-types";

function MovieCard({ coverImage, title, genres, summary }) {
    return (
        <div >
            <img alt={title} src={coverImage}/>
            <h2>{title}</h2>
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