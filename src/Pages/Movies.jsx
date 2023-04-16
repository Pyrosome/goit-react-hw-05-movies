//import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {

    // useEffect(() => {
    //     http запрос (api)
    // }, [])

    const [movies, setMovies] = useState(['nemo', 'doll', 'alice', 'king', 'sand'])
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation(); 
    console.log(location);

    const updateQuery = evt => {
        const {value} = evt.target
        if (value === '') {
            return setSearchParams({})
        }
        return setSearchParams({query: value})
    }

    const query = searchParams.get('query') ?? '';
    const visibleMovies = movies.filter(movie => movie.includes(query));

    return (
        <div>
            <input type="text" value={query} onChange={updateQuery}/>
            <button type='submit'> change query</button>
                
            <ul>{visibleMovies.map(movie => {
                return (
                    <li key={movie}>
                        <Link to={`${movie}`} state={{from: location}}>{movie}</Link>
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default Movies;