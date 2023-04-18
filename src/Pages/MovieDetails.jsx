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
                alert('Sorry! We didn`t find any movie on this link.')
            })
    }, [])
    
    const { id, poster_path, title, release_date, vote_average,  overview, genres } = movie;
    const year = release_date ? `(${release_date.slice(0, 4)})` : ''
    const score = vote_average ? vote_average.toString().slice(0, 3) : ''
    const genre = genres ? (genres.map(genre => { return genre.name })).join(', ') : ''
    
    return (
        <div style={{paddingLeft: '20px'}}>
            <Link to={backLocation.current}>{'<- To the previous page'}</Link><br/><br/>

            <div style={{display: 'flex'}} >
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ''} alt={title}
                style={{maxWidth: '300px', borderRight: '1px solid rgb(153, 21, 69)', padding: '0 20px 0 20px'}} />
                <ul style={{paddingLeft: '20px', marginRight: '50px'}}>
                    <li>
                        <h2>{title} {year}</h2>
                        <p>User score: {score}</p>
                    </li>
                    <li>
                        <h1>Overview</h1>
                        <p>{overview}</p>
                    </li>
                    <li>
                        <h1>Genres</h1>
                        <p>{genre}</p>
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