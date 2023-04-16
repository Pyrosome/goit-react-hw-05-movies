import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {

    const location = useLocation(); 
    console.log(location);
    
    const backLocation = useRef(location.state?.from ?? '/movies')

    const { movieId } = useParams();
    console.log(movieId);

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