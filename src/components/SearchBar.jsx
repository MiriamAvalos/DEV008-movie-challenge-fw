import './SearchBar.css';
import imagenBusqueda from '../images/search.png';

import { useState } from "react";

export default function SearchBar(props) {
    const [searchValue, setSearchValue]= useState("")
    //valor del input
    const valueSearch = props.value;
    //función que actualiza la variable de estado
    function handleChange (event) {
     const valueTextUser = event.target.value;
     setSearchValue(valueTextUser)
     props.handleSearch(valueTextUser);
    }

    //función para manejar la busqueda al hacer clic

    function handleClick(){
        console.log(valueSearch)
        props.handleSearch()
    }
    return (
       <div className='contentSearchBar'>


      
      <input type="text" placeholder="Buscar una película..." className="inputSearchMovies" onChange={event=>handleChange(event)} value={searchValue} />
      
      <img src={imagenBusqueda} onClick={handleClick} className='imageSearch' />
      
       </div>

    )

    }