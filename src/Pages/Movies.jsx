//import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Movies = () => {

    // useEffect(() => {
    //     http запрос (api)
    // }, [])

    const [movies, setMovies] = useState(['nemo', 'doll', 'alice', 'king', 'sand'])
    const [searchParams, setSearchParams] = useSearchParams();

    const updateQuery = evt => {
        const {value} = evt.target
        const nextParams = value !== ' ' ? { value } : {}
        setSearchParams({ query: nextParams.value })
    }

    const query = searchParams.get('query')
    const visibleMovies = movies.filter(movie => movie.includes(query));

    return (
        <div>
            <input type="text" onChange={updateQuery}/>
            <button type='submit'> change query</button>
                
            <ul>{visibleMovies.map(movie => {
                return (
                <li key={movie}>
                    <Link to={`${movie}`}>{movie}</Link></li>
                )
            })}</ul>
        </div>
    )
}

export default Movies;