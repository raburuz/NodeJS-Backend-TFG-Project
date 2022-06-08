import style from './Menu.module.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';


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
                <div className={style.templateMenu}><a href="/build" className={style.botonSelect}>Choose</a></div>
                
              }
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
            </div>
        </div>
    </>
  );
};
