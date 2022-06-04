import { MetaTags } from '../interfaces/structural';
import { Main } from '../layouts';
import { TemplateItem } from '../components/template';

const metaTags: MetaTags = {
  title: 'Websites',
  description: 'Websites make it by users',
};

const BuildScreen = () => {
  return (
    <Main metaTags={metaTags}>
      <TemplateItem />
    </Main>
  );
};

export default BuildScreen;
