import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "service/APIMovieSearch";

const Home = () => {
    
    const [movies, setMovies] = useState([]);
    const location = useLocation(); 
    
    useEffect(() => {
        getTrendingMovies()
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    
    return (
        <div>
            <h1>Trending this week 🎥</h1>
                
            <ul style={{listStyle: 'upper-roman', marginLeft: '50px'}}
            >{movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </li>
                )
            })}</ul>

        </div>
    )
}

export default Home; 

//http://localhost:3000/goit-react-hw-05-movies
//http://localhost:3000/goit-react-hw-05-movies/movies/6.%20Schindler%60s%20List%20(1993)