import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Detail () {
    const { id } = useParams();
    // console.log(id);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => {
            setLoading(false);
            setMovie(json.data.movie);
        }
        )
    },[])

    console.log(movie);

    return (
        <div>
            <h1>{loading ? 'Loading...' : `${movie.title}`}</h1>
            <img src={movie.medium_cover_image} />
            <p>{movie.description_intro}</p>
            {/* <ul>{movie.genres.map((item) => <li key={item}>{item}</li>)}</ul> */}
        </div>
    )
}

export default Detail;