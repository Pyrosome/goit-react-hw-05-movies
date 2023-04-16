// import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Home = ({movies}) => {

    // useEffect(() => {
    // }, [])

    const location = useLocation(); 
    console.log(location);

    return (
        <div>Home 🪲
                
            <ul>{movies.map(movie => {
                return (
                    <li key={movie}>
                        <Link to={`/movies/${movie}`} state={{from: location}}>{movie}</Link>
                    </li>
                )
            })}</ul>

        </div>
    )
}

export default Home; 

//http://localhost:3000/goit-react-hw-05-movies
//http://localhost:3000/goit-react-hw-05-movies/movies/6.%20Schindler%60s%20List%20(1993)