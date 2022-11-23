import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

const Home = () => {
        const [loading, setLoading] = useState(true);
        const [movies, setMovies] = useState([]);
      
        useEffect(() => {
          fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
          .then((response) => response.json())
          .then((json) => setMovies(json.data.movies))
      
          setLoading(false);
        },[])
      
        return (
          <div className="App">
            {loading ? <h1>Loading...</h1> : <h1>Movie Lists</h1>}
      
            <hr />
            
            { movies.map( (movie) => <Movie
            coverImg={movie.medium_cover_image} 
            key={movie.id}
            id={movie.id}
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
             />
             )
            }
      
            
          </div>
        );
}

export default Home;