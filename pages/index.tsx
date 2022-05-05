import type { NextPage } from 'next';
import { MetaTags } from '../interfaces';
import { Main } from '../layouts';

const Home: NextPage = () => {
  const metaTags: MetaTags = {
    title: '',
    description: '',
  };

  return (
    <Main metaTags={metaTags}>
      <>
        <h1>Hola Mundo</h1>
      </>
    </Main>
  );
};

export default Home;
