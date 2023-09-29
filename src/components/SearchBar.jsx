export default function SearchBar(props) {

    //valor del input
    const valueSearch = props.value;
    //función que actualiza la variable de estado
    function handleChange (event) {
     const valueTextUser = event.target.value;
     props.handleChange(valueTextUser);
    }

    //función para manejar la busqueda al hacer clic

    function handleClick(){
        console.log(valueSearch)
        props.handleSearch()
    }
    return (
       <div>


      <label >Buscar: </label>
      <input type="text" id="Search" onChange={handleChange} value={valueSearch} />
      <button onClick={handleClick}> Buscar </button>
      
       </div>

    )

    }