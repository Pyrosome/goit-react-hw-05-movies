import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReview } from "service/APIMovieSearch"

export const Reviews = () => {

    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReview(movieId)
            .then(res => {
                setReviews(res.data.results.slice(0, 8));
            })
            .catch(error => {
                console.log(error);
                alert('We`re sorry! No reviews found.')
        })
    }, [])

    return (
        <div>
            <h1>Reviews of the movie:</h1>
            
            {reviews.length!==0 ? <ul style={{ listStyle: 'square', margin: '25px' }}
            >{reviews.map(review => {
                return (
                    <li style={{ padding: '10px 0 10px 0', borderBottom: '0.5px solid rgb(153, 21, 69)'}} key={review.id}>
                        <p style={{fontWeight: 'bold'}}>Author name: {review.author}</p>
                        <p style={{marginLeft: '10px'}}>{review.content}</p>
                    </li>
                )
            })}</ul> : <p>No reviews found for the movie.</p> }
        </div>
    )
}