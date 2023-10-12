import { useEffect, useState } from "react";
import {getPopularSeries} from "../Api";
import Card from "../components/Card";
import './series.css';


export default function Series() {
    //variables de estado
    const [allSeries, setAllSeries] = useState([]); //todas las series
 


    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularSeries()
        .then((response) => {
         
      //setAllMovies(allMovies);
            setAllSeries(response.results); //results es la propiedad del objeto response
           
        })
            //console.log("peliculas", response.results);
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);// Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial
  



    return (
                <div>
      
                {allSeries.map((item) => (
                <Card movie={item} key={item.id}  />
                ))}
    
                </div>
                              
  
                


                
   
    )
}












