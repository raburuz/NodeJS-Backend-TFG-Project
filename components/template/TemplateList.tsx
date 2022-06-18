import style from './Menu.module.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Link } from '@mui/material';
import template1 from './image/template1.png'
import template2 from './image/template2.jpg'
import template3 from './image/template3.jpg'
import Image from 'next/image'

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
                <div className={style.templateMenu}><Image alt="logo" src={template1} /></div>
                
              }
                <div className={style.templateMenu}><Image alt="logo" src={template2} /></div>
                <div className={style.templateMenu}><Image alt="logo" src={template3} /></div>
            </div>
        </div>
    </>
  );
};
