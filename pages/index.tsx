import type { NextPage } from 'next';
import { MetaTags } from '../interfaces';
import { Main } from '../layouts';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { Link } from '@mui/material';
import logo from '../components/images/logo.png'
import imagen1 from '../components/images/imagen3.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AuthContext } from '../context';
import React, { useContext } from 'react';

const Home: NextPage = () => {
  const metaTags: MetaTags = {
    title: '',
    description: '',
    link:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
  };

  const { userData } = useContext(AuthContext);

  return (
    <Main metaTags={metaTags}>
      <>
        <div className={styles.container}>
          <div className={styles.cont}>
            <div className={styles.logo}><Image alt="logo" className={styles.log} src={logo} /></div>
            <div className={styles.textInfo}>A place where you can create your page quickly and easily. Let your imagination fly.</div>
            </div>
          <div className={styles.information}>
            <div className={styles.info}>
              <div className={styles.textInformation}>
                <h1 className={styles.titleInfo}>Create one page sites for anything</h1>
                <h2 className={styles.infoText}>Whether it's a profile, a landing page, or something a little more elaborate. Simple, easy and yes, totally free.</h2>
              </div>
              <div className={styles.templates}>
                  <div id={styles.caja}>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/346/posts/32708/image/portfolio_template10.jpg'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'Montserrat'}}>
                          That attracts at a glance
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Montserrat'}}>
                          Well, use that experience to your advantage in your portfolio. 
                          Use all the elements and all the tools at your disposal so that whoever sees your portfolio cannot resist and has to contact you.
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://s.tmimgcdn.com/scr/400x250/232900/dolunay-portafolio-creativo-plantilla-html-multiproposito-y-personal_232930-2-original.png'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'Montserrat'}}>
                        Reflect who you are  
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Montserrat'}}>
                        Although on many occasions it is a factor that is left in the background, it should not happen. 
                        Think that the web design portfolio has to convey your personality as a professional.
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://s.tmimgcdn.com/wp-content/uploads/2015/10/55114-photographer-portfolio-18.jpg?width=800&height=0'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'Montserrat'}}>
                          Portfolio must be innovative
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Montserrat'}}>
                          It is clear that the work of the web designer is one hundred percent creative. This implies that, if the project you want to show can be shown from 
                          a different perspective, it is an obligation.
                        </Typography>
                      </CardContent>
                    </Card>
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
