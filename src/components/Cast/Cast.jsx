import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovieCast } from "service/APIMovieSearch"

export const Cast = () => {

    const { movieId } = useParams()
    const [crew, setCrew] = useState([])

    useEffect(() => {
        getMovieCast(movieId)
            .then(res => {
                setCrew(res.data.cast.slice(0, 8));
            })
            .catch(error => {
                console.log(error);
                alert('We`re sorry! No crew data found.')
        })
    }, [movieId])

    return (
        <div>
            <h1>Main cast of the movie:</h1>
            
            <ul style={{ listStyle: 'none', display: 'flex' }}
            >{crew.map(person => {
                return (
                    <li style={{
                        borderRight: '0.5px solid rgb(153, 21, 69)', marginRight: '5px', width: '20%'}}
                        key={person.id}>
                        <img src={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : ''} alt={person.name}
                style={{maxWidth: '100px'}} />
                        <p>Actor: {person.name}</p>
                        <p>Played the character: {person.character}</p>
                    </li>
                )
            })}</ul>
        </div>
    )
}