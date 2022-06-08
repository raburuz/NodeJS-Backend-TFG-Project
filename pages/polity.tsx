import { MetaTags } from '../interfaces/structural';
import { Main } from '../layouts';
import { Polity } from '../components/ui/Polity';

const metaTags: MetaTags = {
  title: 'Templates',
  description: 'Create your own Landing Page',
};

const Privacy = () => {
  return (
    <Main metaTags={metaTags}>
      <Polity />
    </Main>
  );
};

export default Privacy;
