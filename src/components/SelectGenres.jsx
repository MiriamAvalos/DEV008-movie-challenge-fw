const genres = [
    { genre_name: "Action", id: 28 },
    { genre_name: "Adventure", id: 12 },
    { genre_name: "Animation", id: 16 },
    { genre_name: "Comedy", id: 35 },
    { genre_name: "Crime", id: 80 },
    { genre_name: "Documentary", id: 99 },
    { genre_name: "Drama", id: 18 },
    { genre_name: "Family", id: 10751 },
    { genre_name: "Fantasy", id: 14 },
    { genre_name: "History", id: 36 },
    { genre_name: "Horror", id: 27 },
    { genre_name: "Music", id: 10402 },
    { genre_name: "Mystery", id: 9648 },
    { genre_name: "Romance", id: 10749 },
    { genre_name: "Science Fiction", id: 878 },
    { genre_name: "TV Movie", id: 10770 },
    { genre_name: "Thriller", id: 53 },
    { genre_name: "War", id: 10752 },
    { genre_name: "Western", id: 37 }
  ]; 

export function SelectGenres (props) {

     function handleSelect (e) {
        props.setGenreSelect(Number(e.target.value))  //transformarmos el valor string a tipo numero
        
        // e = evento (select)
        //target = quien esta llamando a ese evento (onChange,onClick, etc)
        //value = solo en inputs o en selects

     }
 

    return (
        
        <select onChange={handleSelect}>
            

               {genres.map(genre => <option value={genre.id} key={genre.id}> {genre.genre_name} </option>) }
            
        </select>
        
    )



}
