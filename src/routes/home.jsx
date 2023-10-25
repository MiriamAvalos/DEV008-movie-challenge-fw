import { useEffect, useState } from "react";
import React from 'react';
import {getPopularMovie, searchAllMovies } from "../Api";
import Header from '../components/Header';
import Card from "../components/Card";
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import imageShowTuman from '../images/showtruman.jpg';
import './home.css';
import { SelectGenres } from "../components/SelectGenres";




export default function Home() {
    //variables de estado
    const [allMovies, setAllMovies] = useState([]); //todas las peliculas sin filtrar
    const [loading, setLoading] = useState(true);  //estado para loading
    const [searchText, setSearchText] = useState("") 
    const [searchResults, setSearchResults ] = useState([])  
    const [page, setPage] = useState(1)  //estado para paginación
    const [genreSelect, setGenreSelect] = useState() //estado para generos 
    const [genreFilter, setGenreFilter] = useState([]); // Estado para las películas filtradas por género


   
   //filtro
   useEffect(() => {
    let genreFilter = allMovies.filter(movie => movie.genre_ids.includes(genreSelect));
    console.log("filtrado", genreFilter);
    setGenreFilter(genreFilter);
     
    // Puedes realizar otras acciones con genreFilter aquí si es necesario.
  
  }, [genreSelect, allMovies]); // Ahora se ejecutará cuando genreSelect o allMovies cambien

   // Función para restablecer el filtro
   const resetFilter = () => {
    setGenreSelect(0); // Restablece el filtro de género a su estado inicial (0 o el valor que uses)
    setSearchText(""); // Limpia el campo de búsqueda si es necesario
  };
  


    useEffect(() => {
        // Dentro de useEffect para que se ejecute después de la renderización
        getPopularMovie(page).then((response) => {
         
      //setAllMovies(allMovies);
            setAllMovies(response.results); //results es la propiedad del objeto response
            console.log("peliculas", response.results);
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
     const handleSearch = (valueTextUser) =>{
      console.log(valueTextUser)
      setSearchText(valueTextUser)
      console.log(searchText)


  
     console.log(valueTextUser)
    //actualiza el estado con peliculas filtradas
    if (valueTextUser === ""){
      getPopularMovie().then((response) => {
         
        //setAllMovies(allMovies);
              setAllMovies(response.results); //results es la propiedad del objeto response
              setGenreFilter([]);
              // Agregamos un retraso artificial para que el indicador de carga sea visible
          setTimeout(() => {
              setLoading(false); // Cuando los datos se cargan, establece loading en false
            }, 700); // Retraso de tiempo
          })
              //console.log("peliculas", response.results);
          
          .catch((error) => {
              console.error("Error al obtener los datos:", error);
          });
    } else{
    searchAllMovies(searchText).then((response) => { 
    setAllMovies(response.results)
         console.log(searchResults)
    }
      )

      }
    }


    //función para button ver más , suma 20
    const onClickVerMas = () => {
      
      console.log(page)
      getPopularMovie( page+1).then((response) => {
         const moviesAntiguas = [...allMovies, ...response.results] //
        //setAllMovies(allMovies);
        setPage(page+1)
              setAllMovies(moviesAntiguas); //results es la propiedad del objeto response
             // Agregamos un retraso artificial para que el indicador de carga sea visible
          setTimeout(() => {
              setLoading(false); // Cuando los datos se cargan, establece loading en false
            }, 700); // Retraso de tiempo
          })
              //console.log("peliculas", response.results);
          
          .catch((error) => {
              console.error("Error al obtener los datos:", error);
          });
    }



 



    return (
        <div>

          {loading ? (
            // Muestra el componente de carga si loading es true
            <Loading />
          ) : (
            // Muestra la lista de películas si loading es false
            <div>
             

                <Header />
                <div className="contentImageHeader">
                <img src={imageShowTuman} className='imageShowTruman' />
                <p className="welcome">¡Bienvenidxs!</p>
                <h2 className="description">El sitio donde <br></br>
                  encontrarás información de <br></br>
                   miles de películas y series.
                   
                  <br></br>¡Comienza a explorar ahora! 
                </h2>
                </div>
        

{/* Muestra las películas filtradas */}
{genreFilter.length > 0 ? (
  <>
    <SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch} />
  

{/* Agrega un botón o enlace para restablecer el filtro */}
<SelectGenres setGenreSelect={setGenreSelect} />
<div className="contentResetFilter"> <button className="resetFilter" onClick={resetFilter}>Limpiar filtro</button> </div>
   <p className="seachText">Resultados de su busqueda: </p> 
   {genreFilter.map((item) => (
    <Card movie={item} key={item.id} />
  ))}
  <button onClick={onClickVerMas}>ver más</button>
  </>

) : (
  <>
   <SearchBar value={searchText} handleChange={setSearchText} handleSearch={handleSearch}/>
   <SelectGenres setGenreSelect={setGenreSelect} />
  

{/* Agrega un botón o enlace para restablecer el filtro */}

<h1 className="peliculasPopularesTitle">Películas populares</h1>

                
              
          
{genreFilter.length === 0 && allMovies.length === 0 ? (
  <p>No se encontraron resultados a su búsqueda</p>
) :  <>
                {React.Children.toArray(allMovies.map((item) => (
                <Card movie={item}  />
          
                )))}
                <button onClick={onClickVerMas}>ver más</button> 
                </>
                              
  
                }


                
   
  </>
)}

               
              
    </div>
     )}
     </div>
   );
 }