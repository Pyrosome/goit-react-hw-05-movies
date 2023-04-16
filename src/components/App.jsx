import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy, useState } from "react";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
 
const Home = lazy(() => import('../Pages/Home'))
const Movies = lazy(() => import('../Pages/Movies'))
const MovieDetails = lazy(() => import('../Pages/MovieDetails'))

export const App = () => {

  const [movies, setMovies] = useState([
  '1. The Shawshank Redemption (1994)',	
  '2. The Godfather (1972)',
  '3. The Dark Knight (2008)',
  '4. The Godfather Part II (1974)',
  '5. 12 Angry Men (1957)',
  '6. Schindler`s List (1993)',
  '7. The Lord of the Rings: The Return of the King (2003)',
  '8. Pulp Fiction (1994)',
  '9. The Lord of the Rings: The Fellowship of the Ring (2001)',
  '10. The Good, the Bad and the Ugly (1966)',
  '11. Forrest Gump (1994)',
  '12. Fight Club (1999)',
  '13. The Lord of the Rings: The Two Towers (2002)',
  '14. Inception (2010)',
  '15. Star Wars: Episode V - The Empire Strikes Back (1980)',
  '16. The Matrix (1999)',
  '17. GoodFellas (1990)',
  '18. One Flew Over the Cuckoo`s Nest (1975)',
  '19. Seven (1995)',
  '20. It`s a Wonderful Life (1946)'])

  return (

      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Home movies={movies}/> } />
          <Route path='/movies' element={ <Movies movies={movies}/> } />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={ <Cast/> } /> 
            <Route path='reviews' element={ <Reviews/> } />
          </Route>
        </Route>
      </Routes>
  );
};
