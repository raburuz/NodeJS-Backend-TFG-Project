import { MetaTags } from '../interfaces/structural';
import { Main } from '../layouts';
import { TemplateItem } from '../components/template';

const metaTags: MetaTags = {
  title: 'Templates',
  description: 'Create your own Landing Page',
};

const BuildScreen = () => {
  return (
    <Main metaTags={metaTags}>
      <TemplateItem />
    </Main>
  );
};

export default BuildScreen;
