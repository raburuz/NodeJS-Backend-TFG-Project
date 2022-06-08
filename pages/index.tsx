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
            <div className={styles.logo}><Image className={styles.log} src={logo} /></div>
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
                  <div id={styles.caja}>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 400, margin:'15px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
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
