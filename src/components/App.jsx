import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "Pages/Home";
import Movies from "Pages/Movies";
import MovieDetails from "Pages/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

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
