import { useEffect, useState } from "react";
import {getPopularSeries, searchAllSeries} from "../Api";
import Card from "../components/Card";
import './series.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';




export default function Series() {
    //variables de estado
    const [allSeries, setAllSeries] = useState([]); //todas las series
    const [page, setPage] = useState(1)  //estado para paginación
    const [searchText, setSearchText] = useState("") //estado para la busqueda 
    const [searchResults, setSearchResults ] = useState([])  
    //console.log("paginas", page)


    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularSeries(page)
        .then((response) => {
         
      //setAllMovies(allMovies);
            setAllSeries(response.results); //results es la propiedad del objeto response
            console.log("series", response.results);
           
        })
            
        
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);// Usamos un arreglo vacío para que se ejecute solo una vez después de la renderización inicial
     



   //paginación
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



     //función para manejar la busqueda
     const handleSearch = (valueTextUser) =>{
        console.log(valueTextUser)
        setSearchText(valueTextUser)
        console.log(searchText)
  
  
    
       console.log(valueTextUser)
      //actualiza el estado con peliculas filtradas
      if (valueTextUser === ""){
        getPopularSeries().then((response) => {
           
          //setAllMovies(allMovies);
                setAllSeries(response.results); //results es la propiedad del objeto response
                
            })
                //console.log("series", response.results);
            
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
      } else{
        searchAllSeries(searchText).then((response) => { 
      setAllSeries(response.results)
           console.log(searchResults)
      }
        )
  
        }
      }

    return (
                <div>
                    <Header />
                    <SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch} />
      

                    {allSeries.length === 0 ? (
  <p>No se encontraron resultados a su búsqueda</p>
) :  <>   
  <h2 className="seriesPopularesTitle">Series populares</h2>
                {allSeries.map((item) => (
                <Card movie={item} key={item.id}  />
                ))}

<button className="viewMore" onClick={onClickVerMasSeries}>ver más</button> 
                </>
                              
  
                }
                </div>
                )
                 
   
}
                


                
         
                                
    
                












