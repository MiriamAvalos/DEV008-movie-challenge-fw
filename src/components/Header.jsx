import './Header.css';
import imageMenuToggle from '../images/menu.png';
import cross from '../images/cross.png';
import { useNavigate } from 'react-router-dom';

import imageHeader from '../images/icon-movie.png';

export default function Header() {
    const navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo

       //función para navegar a series
       const navigateToSeries = () => navigate("/series");

       //función para navegar a peliculas

       const navigateToMovies = () => navigate("/");
    

   
      return (
          <div className= "DivHeader"> 
             <header className="HeaderHome"> <img src={imageHeader}  className='imageHeader' /><h1 className='titleApi'>FilmFolio</h1></header>
              
          
          
          <nav className="navBarmenuToggle">
              <input className="checkbox" type="checkbox" />
              <img src={imageMenuToggle}  className='imageMenuToggle icons' />
              <img src={cross} className='cross icons' />
              <ul className='menu'>
                  <li onClick={navigateToMovies}><a>Peliculas</a></li>
                  <li onClick={navigateToSeries}><a>Series</a></li>
              </ul>

          </nav>
      
          </div>
         
      )
  }
  
  
 