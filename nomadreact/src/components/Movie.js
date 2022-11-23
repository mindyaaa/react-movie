import PropTypes from 'prop-types';

const Movie = ({coverImg, title, summary, genres}) => {
    return (
        <div>
          <img alt={title} src={coverImg}/>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((item) => <li key={item}>
              {item}
            </li>)}
          </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;