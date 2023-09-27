import { useEffect, useState } from "react";
import getData from "../Api";
import Card from "../components/Card";


export default function Home() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getData().then((response) => {
            setResults(response.results);
            console.log("peliculas", response.results);
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []); // Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial

    return (
        <div>
            {/* Renderiza los resultados aquí */}
        </div>
    );
}
