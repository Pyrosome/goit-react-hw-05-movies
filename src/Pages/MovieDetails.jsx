import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "service/APIMovieSearch";

const MovieDetails = () => {

    const location = useLocation();     
    const backLocation = useRef(location.state?.from ?? '/movies')
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId)
            .then(res => {
                setMovie(res.data)
                console.log(movie.id, movie.poster_path, movie.title, movie.overview, movie.genres, );
            })
    }, [])

    return (
        <div>
            <Link to={backLocation.current}>{'<- Перейти назад'}</Link><br/><br/>

            <div style={{display: 'flex'}} >
                <img src="https://m.media-amazon.com/images/I/51QjxZnO6XL._AC_UF894,1000_QL80_.jpg" alt="only lovers left alive poster"
                style={{maxWidth: '300px'}} />
                <ul>
                    <li>
                        <h2>Movie title (year)</h2>
                        <p>User score: n%</p>
                    </li>
                    <li>
                        <h1>Overview</h1>
                        <p>short descr</p>
                    </li>
                    <li>
                        <h1>Genres</h1>
                        <p>movie genres in flexlist</p>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
            </div>

            <Outlet/>

        </div>
    )
}

export default MovieDetails;