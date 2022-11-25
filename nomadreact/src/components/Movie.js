import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Movie = ({coverImg, title, summary, genres ,id}) => {
    return (
        <div>
          <img alt={title} src={coverImg}/>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul>
            {genres.map((item) => <li key={item}>
              {item}
            </li>)}
          </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;