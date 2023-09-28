import { useEffect, useState } from "react";
import {getPopularMovie} from "../Api";
import Card from "../components/Card";
import Loading from '../components/Loading';


export default function Home() {
    //variables de estado
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularMovie().then((response) => {
            setResults(response.results);
           // Agregamos un retraso artificial para que el indicador de carga sea visible
        setTimeout(() => {
            setLoading(false); // Cuando los datos se cargan, establece loading en false
          }, 1000); // Retraso de 1 segundo (ajusta según tus necesidades)
        })
            //console.log("peliculas", response.results);
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);// Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial

    return (
        <div>
          {loading ? (
            // Muestra el componente de carga si loading es true
            <Loading />
          ) : (
            // Muestra la lista de películas si loading es false
            <div>
              {results.length <= 0 ? null : results.map((item) => <Card movie={item} key={item.id}  />)}
    
    </div>
     )}
     </div>
   );
 }