import './Header.css';
import imageMenuToggle from '../images/menu.png';
import cross from '../images/cross.png';
import { useNavigate, Link} from 'react-router-dom';

import imageHeader from '../images/icon-movie.png';

export default function Header() {
    const navigate = useNavigate()  //todos los hooks comienzan con "use", los hooks son funciones que nos retornan algo

    

   
      return (
          <div className= "DivHeader"> 
             <header className="HeaderHome"> <img src={imageHeader}  className='imageHeader' /><h1 className='titleApi'>FilmFolio</h1></header>
              
          
          
          <nav className="navBarmenuToggle">
              <input className="checkbox" type="checkbox" />
              <img src={imageMenuToggle}  className='imageMenuToggle icons' />
              <img src={cross} className='cross icons' />
              <ul className='menu'>
                  <li><Link to="/">Peliculas</Link></li>
                  <li><Link to="series">Series</Link></li>
              </ul>

          </nav>
      
          </div>
         
      )
  }
  
  
 