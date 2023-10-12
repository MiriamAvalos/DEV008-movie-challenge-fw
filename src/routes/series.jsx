import { useEffect, useState } from "react";
import {getPopularSeries} from "../Api";
import Card from "../components/Card";
import './series.css';
import Header from '../components/Header';


export default function Series() {
    //variables de estado
    const [allSeries, setAllSeries] = useState([]); //todas las series
    const [page, setPage] = useState(1)  //estado para paginación
    console.log("paginas", page)


    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularSeries(page)
        .then((response) => {
         
      //setAllMovies(allMovies);
            setAllSeries(response.results); //results es la propiedad del objeto response
           
        })
            //console.log("peliculas", response.results);
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);// Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial




   //paginción
   const onClickVerMasSeries = () => {
    getPopularSeries( page+1).then((response) => {
       const seriesAntiguas = [...allSeries, ...response.results] //
      //setAllMovies(allMovies);
      setPage(page+1)
            setAllSeries(seriesAntiguas); //results es la propiedad del objeto response
        
        })
            //console.log("peliculas", response.results);
          
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }

  



    return (
                <div>
                    <Header />
      
                {allSeries.map((item) => (
                <Card movie={item} key={item.id}  />
                ))}

<button onClick={onClickVerMasSeries}>ver más</button>
    
                </div>
                              
  
                


                
   
    )
}












