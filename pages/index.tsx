import type { NextPage } from 'next';
import { MetaTags } from '../interfaces';
import { Main } from '../layouts';
import style from '../styles/Home.module.css';

const Home: NextPage = () => {
  const metaTags: MetaTags = {
    title: '',
    description: '',
  };

  return (
    <Main metaTags={metaTags}>
      <></>
    </Main>
  );
};

export default Home;
