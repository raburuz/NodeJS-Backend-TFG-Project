import style from './Footer.module.css'
import { Link } from '@mui/material';

export const Footer = () => {
  return (
    <footer className={style.footer}> 
      <ul className={style.lista}>
        <li className={style.element}><Link href='/' sx={{color:'#FFFFFF', textDecoration:'none'}}>Home</Link></li>
        <li className={style.element}><span className={style.separador}>| </span><Link href='/menu' sx={{color:'#FFFFFF', textDecoration:'none'}}>Templates</Link></li>
        <li className={style.element}><span className={style.separador}>| </span><Link href='/polity' sx={{color:'#FFFFFF', textDecoration:'none'}}>Privacy</Link></li>
      </ul>
      <p className={style.copyright}>© Puzzle. All rights reserved.</p>
      
    </footer>
  );
};