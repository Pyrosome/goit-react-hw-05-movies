import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
 
const Home = lazy(() => import('../Pages/Home'))
const Movies = lazy(() => import('../Pages/Movies'))
const MovieDetails = lazy(() => import('../Pages/MovieDetails'))

export const App = () => {
  return (

      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Home/> } />
          <Route path='/movies' element={ <Movies/> } />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={ <Cast/> } />
            <Route path='reviews' element={ <Reviews/> } />
          </Route>
        </Route>
      </Routes>
  );
};
