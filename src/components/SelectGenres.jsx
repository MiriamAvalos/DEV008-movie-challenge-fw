import './SelectGenres.css';

const genres = [
    { genre_name: "Acción", id: 28 },
    { genre_name: "Aventura", id: 12 },
    { genre_name: "Animación", id: 16 },
    { genre_name: "Comedia", id: 35 },
    { genre_name: "Crimen", id: 80 },
    /*{ genre_name: "Documentales", id: 99 },*/
    { genre_name: "Drama", id: 18 },
    { genre_name: "Familia", id: 10751 },
    { genre_name: "Fantasia", id: 14 },
    { genre_name: "Historia", id: 36 },
    { genre_name: "Terror", id: 27 },
    /*{ genre_name: "Musicales", id: 10402 },*/
    { genre_name: "Misterio", id: 9648 },
    { genre_name: "Romance", id: 10749 },
    { genre_name: "Ciencia Ficción", id: 878 },
    /*{ genre_name: "Programas de Tv", id: 10770 },*/
    { genre_name: "Thriller", id: 53 },
    { genre_name: "Batallas", id: 10752 },
    /*{ genre_name: "Western", id: 37 }*/
  ]; 

export function SelectGenres (props) {

     function handleSelect (e) {
        props.setGenreSelect(Number(e.target.value))  //transformarmos el valor string a tipo numero
        
        // e = evento (select)
        //target = quien esta llamando a ese evento (onChange,onClick, etc)
        //value = solo en inputs o en selects

     }
 

    return (
        <div className="divSelectGenre">
        <select className="selectGenre" onChange={handleSelect}>
        <option value="">Seleccionar género</option> {/* Opción inicial */}
            

               {genres.map(genre => <option value={genre.id} key={genre.id}> {genre.genre_name} </option>) }
            
        </select>
        </div>
    )



}
