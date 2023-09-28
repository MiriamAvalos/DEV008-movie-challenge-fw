import { useEffect, useState } from "react";
import {getPopularMovie} from "../Api";
import Card from "../components/Card";


export default function Home() {
    //variables de estado
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularMovie().then((response) => {
            setResults(response.results);
            console.log("peliculas", response.results);
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []); // Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial

    return (
        <div>
        {results.length <= 0 ? null : results.map((item) => <Card movie={item} key={item.id}  />)}
    
    </div>
        
        )
}
