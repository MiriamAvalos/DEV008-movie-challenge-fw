
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import './App.css';
import Home from "./routes/home";
import { Movie } from "./components/Movie";
import Series from "./routes/series";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
             {/* Ruta para las series populares */}
        <Route path="/series" element={<Series />} />

           {/* <Route path="Peliculas" element={<Blogs />} />
          <Route path="Series" element={<Contact />} />
          <Route path="Detalles" element={<NoPage />} /> */}
         
        
        <Route path="/description" element={<Movie />}>
           
      

        </Route>
      </Routes>
    </BrowserRouter>
  )
  

  }

export default App;
