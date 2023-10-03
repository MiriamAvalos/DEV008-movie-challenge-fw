import './Header.css';
import imageHeader from '../images/icon-movie.png';

export default function Header() {

   
      return (
          <div className= "DivHeader"> 
             <header className="HeaderHome"> <img src={imageHeader}  className='imageHeader' /><h1 className='titleApi'>FilmFolio</h1></header>
              
          </div>
         
      )
  }
  
  
 