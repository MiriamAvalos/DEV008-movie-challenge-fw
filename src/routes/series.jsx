import { useEffect, useState } from "react";
import {getPopularSeries, searchAllSeries} from "../Api";
import Card from "../components/Card";
import './series.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { SelectGenres } from "../components/SelectGenres";
import React from 'react';




export default function Series() {
    //variables de estado
    const [allSeries, setAllSeries] = useState([]); //todas las series
    const [page, setPage] = useState(1)  //estado para paginación
    const [searchText, setSearchText] = useState("") //estado para la busqueda 
    const [searchResults, setSearchResults ] = useState([])  
    const [genreSelectSeries, setGenreSelectSeries] = useState() //estado para generos 
    const [genreFilterSeries, setGenreFilterSeries] = useState([]); // Estado para las películas filtradas por género
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

      //filtro
   useEffect(() => {
    let genreFilter = allSeries.filter(movie => movie.genre_ids.includes(genreSelectSeries));
    console.log("filtrado", genreFilter);
    setGenreFilterSeries(genreFilter);
     
    // Puedes realizar otras acciones con genreFilter aquí si es necesario.
  
  }, [genreSelectSeries, allSeries]); // Ahora se ejecutará cuando genreSelect o allMovies cambien

   // Función para restablecer el filtro
   const resetFilterSeries = () => {
    setGenreSelectSeries(0); // Restablece el filtro de género a su estado inicial (0 o el valor que uses)
    setSearchText(""); // Limpia el campo de búsqueda si es necesario
  };
  

    return (
      <div>
         <Header />


{/* Muestra las películas filtradas */}
{genreFilterSeries.length > 0 ? (
<>
<SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch} />


{/* Agrega un botón o enlace para restablecer el filtro */}
<SelectGenres setGenreSelect={setGenreSelectSeries} />
<div className="contentResetFilter"> <button className="resetFilterSeries" onClick={resetFilterSeries}>Limpiar filtro</button> </div>
<p className="seachText">Resultados de su busqueda: </p> 
{genreFilterSeries.map((item) => (
<Card movie={item} key={item.id} />
))}
<button className="viewMore" onClick={onClickVerMasSeries}>ver más</button>
</>

) : (
<>
<SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch}/>
<SelectGenres setGenreSelect={setGenreSelectSeries} />


{/* Agrega un botón o enlace para restablecer el filtro */}

<h1 className="seriesPopularesTitle">Series populares</h1>

            
          
      
{genreFilterSeries.length === 0 && allSeries.length === 0 ? (
<p>No se encontraron resultados a su búsqueda</p>
) :  <>
            {React.Children.toArray(allSeries.map((item) => (
            <Card movie={item}  />
      
            )))}
            <button className="viewMore" onClick={onClickVerMasSeries}>ver más</button> 
            </>
                          

            }


            

</>
)}

           
          
</div>
 )}



