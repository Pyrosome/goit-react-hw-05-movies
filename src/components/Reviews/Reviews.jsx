import { useParams } from "react-router-dom"

export const Reviews = () => {

    const {movieId} = useParams()

    return (
        <div>
            Reviews for movie with id: {movieId}
        </div>
    )
}