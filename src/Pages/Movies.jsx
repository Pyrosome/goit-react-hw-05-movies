import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMoviesList } from "service/APIMovieSearch";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchQuery = searchParams.get('query');

    const handleChange = event => {
        setQuery(event.target.value);
    };
    
    useEffect(() => {
        if (searchQuery === `` || searchQuery === null) {
        return;
        }
        
        getMoviesList(searchQuery)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(error => {
            console.log(error);
            return alert(`Sorry, please try again`);
            })
    }, [searchQuery]);

    const handleSubmit = event => {
        event.preventDefault();
        if (!query) {
            setMovies([]);
            return setSearchParams({ });
        }

        setSearchParams({ query: query });
        setQuery('');  
    }

        return (
            <div style={{ paddingLeft: '20px' }}>
                <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} />
                <button type='submit'>Search</button>
                </form>
                
                <ul>{movies ? movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                        </li>
                    )
                }) : ''}</ul>
            </div>
        )
    
}

export default Movies;