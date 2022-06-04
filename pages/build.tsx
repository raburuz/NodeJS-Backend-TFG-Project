import Head from 'next/head';
import dynamic from 'next/dynamic';
import { BuildProvider } from '../context';
import { Metas } from '../components/Structural';
const BuildMain = dynamic(
  () => import('../components/build').then((mod: any) => mod.BuildMain),
  {
    ssr: false,
  }
);

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
