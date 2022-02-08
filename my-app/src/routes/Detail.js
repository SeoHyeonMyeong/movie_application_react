import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(id);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
        setLoading(true);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
    <div>
        <h1>Detail</h1>
        { loading ? ( 
            <div>
                <img alt={data.title} src={data.large_cover_image}/>
                <h1>{data.title}</h1>
                <ul>
                    {data.genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <p>{data.description_full}</p>

            </div>

        ) : null }
    </div>
    );
}
export default Detail;