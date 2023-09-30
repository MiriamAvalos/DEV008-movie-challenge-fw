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
       <div>


      <label >Buscar: </label>
      <input type="text" id="Search" onChange={event=>handleChange(event)} value={searchValue} />
      <button onClick={handleClick}> Buscar </button>
      
       </div>

    )

    }