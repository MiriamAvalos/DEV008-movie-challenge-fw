import { useEffect, useState } from "react";
import {getPopularMovie} from "../Api";
import Card from "../components/Card";
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';


export default function Home() {
    //variables de estado
    const [allMovies, setAllMovies] = useState([]); //todas las peliculas sin filtrar
    const [loading, setLoading] = useState(true); 
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularMovie().then((response) => {
         
      setAllMovies(allMovies);
            setAllMovies(response.results);
           // Agregamos un retraso artificial para que el indicador de carga sea visible
        setTimeout(() => {
            setLoading(false); // Cuando los datos se cargan, establece loading en false
          }, 700); // Retraso de tiempo
        })
            //console.log("peliculas", response.results);
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);// Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial


     //función para manejar la busqueda
     const handleSearch = () =>{

     
     const filterMovies = allMovies.filter((movie)=>
     movie.title.toLowerCase().includes(searchText.toLocaleLowerCase())
     );
     
    //actualiza el estado con peliculas filtradas
    setAllMovies(filterMovies);
     };
    return (
        <div>
          {loading ? (
            // Muestra el componente de carga si loading es true
            <Loading />
          ) : (
            // Muestra la lista de películas si loading es false
            <div>
                <SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch} />

              {allMovies.length <= 0 ? null : allMovies.map((item) => <Card movie={item} key={item.id}  />)}
    
    </div>
     )}
     </div>
   );

   
 }