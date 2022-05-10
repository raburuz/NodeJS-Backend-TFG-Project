import Head from 'next/head';
import { BuildProvider } from '../context';
import { BuildMain } from '../components/build';
import { Metas } from '../components/Structural';

const BuildScreen = () => {
  const metaTags = {
    title: 'Build Landing Page',
    description: 'Build your Landing Page',
  };
  return (
    <BuildProvider>
      <>
        <Head>
          <Metas metaTags={metaTags} />
        </Head>
        <BuildMain />
      </>
    </BuildProvider>
  );
};

export default BuildScreen;
