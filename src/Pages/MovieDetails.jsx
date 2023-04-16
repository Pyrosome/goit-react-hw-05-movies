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
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    
    const { id, poster_path, title, release_date, overview, genres } = movie;
    return (
        <div>
            <Link to={backLocation.current}>{'<- Перейти назад'}</Link><br/><br/>

            <div style={{display: 'flex'}} >
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ''} alt={title}
                style={{maxWidth: '300px'}} />
                <ul>
                    <li>
                        <h2>{title} {release_date ? `(${release_date.slice(0, 4)})` : ''}</h2>
                        <p>User score: n%</p>
                    </li>
                    <li>
                        <h1>Overview</h1>
                        <p>{overview}</p>
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
                        <Link to='cast' id={id}>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews' id={id}>Reviews</Link>
                    </li>
                </ul>
            </div>

            <Outlet/>

        </div>
    )
}

export default MovieDetails;