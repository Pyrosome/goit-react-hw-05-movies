import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {

    const location = useLocation(); 
    console.log(location);
    
    const { movieId } = useParams();
    console.log(movieId);

    return (
        <div>
            <Link to={location.state.from}>{'<- Перейти назад'}</Link>
            <h1>Movie Details 🦇  : movie { movieId }</h1>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>

            <Outlet/>

        </div>
    )
}

export default MovieDetails;