export default function SearchBar(props) {

    //valor del input
    const valueSearch = props.value
    //función que actualiza la variable de estado
    function handleChange (event) {
     const valueTextUser = event.target.value;
     props.handleChange(valueTextUser);
    }

    function handleClick(){
        console.log(valueSearch)
    }
    return (
       <div>


      <label for="name">Buscar: </label>
      <input type="text" id="Search" onChange={handleChange} value={valueSearch} />
      <button onClick={handleClick}> Buscar </button>
      
       </div>

    )

    }