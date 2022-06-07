import type { NextPage } from 'next';
import { MetaTags } from '../interfaces';
import { Main } from '../layouts';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { Link } from '@mui/material';
import logo from '../components/images/logo.png'

const Home: NextPage = () => {
  const metaTags: MetaTags = {
    title: '',
    description: '',
  };

  return (
    <Main metaTags={metaTags}>
      <>
      <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.logo}><Image className={styles.log} src={logo}/></div>		
        <div className={styles.textInfo}>A place where you can create your page quickly and easily. Let your imagination fly.</div>
        {/* <div className={styles.menu}><Link href='/menu' sx={{color:'#FFFFFF'}}>Choose your template</Link></div>
        <div className={styles.login}><Link href='/auth/login' sx={{color:'#FFFFFF'}}>Login</Link></div>
        <div className={styles.register}>You are not <Link href='/auth/register' sx={{color:'#FFFFFF'}}>registered</Link> yet?</div> */}
      </div>
      <div className={styles.information}>
        <div className={styles.info}>
          <div className={styles.textInformation}>
            <h1 className={styles.titleInfo}>Create one page sites for anything</h1>
            <h2 className={styles.infoText}>Whether it's a profile, a landing page, or something a little more elaborate. Simple, easy and yes, totally free.</h2>
          </div>
          <div className={styles.templates}>
            <div id={styles.contenido}>
              <div id={styles.caja}>
                 {/* <div className={styles.carrusel}>
                  <Image className={styles.imagenes} src={imagen1}/>
                </div> */}
                {/*<div className={styles.carrusel}>   
                  <Image className={styles.imagenes} src={imagen2} />
                </div>
                <div className={styles.carrusel}>   
                  <Image className={styles.imagenes} src={imagen3} />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    </Main>
  );
};

export default Home;
