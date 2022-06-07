import style from './Menu.module.css'

export const TemplateList = () => {
  return (
    <>
      
      <div className={style.containerMenu}>
            <div className={style.informationMenu}>
                <div className={style.titleInfoMenu}>See a template</div>
                <div className={style.textInfoMenu}>These are the last pages created by our users.</div>
            </div>
            <div className={style.templatesMenu}>
                <div className={style.templateMenu}><a href="/build" className={style.botonSelect}>Choose</a></div>
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
            </div>
        </div>
    </>
  );
};
