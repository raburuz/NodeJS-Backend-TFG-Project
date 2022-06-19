import style from './Menu.module.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Link } from '@mui/material';

export const TemplateList = () => {
  const { userData } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  return (
    <>
      
      <div className={style.containerMenu}>
            <div className={style.informationMenu}>
                <div className={style.titleInfoMenu}>See a template</div>
                <div className={style.textInfoMenu}>These are the last pages created by our users.</div>
            </div>
            <div className={style.templatesMenu}>
              {
                isLoggedIn &&
                <div className={style.templateMenu}><Link href="/build" className={style.botonSelect}>Choose</Link></div>
                
              }
                <div className={style.templateMenu}><Link href="/index" className={style.botonSelect}>Choose</Link></div>
                <div className={style.templateMenu}><Link href="/index" className={style.botonSelect}>Choose</Link></div>
            </div>
        </div>
    </>
  );
};
