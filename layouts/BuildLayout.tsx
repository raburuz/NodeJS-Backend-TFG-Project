import { Container } from '@mui/material';
import React, { FC } from 'react';
import { BuildMenu } from '../components/build';
import { CustomMenu } from '../components/build/CustomMenu';
import { Metas } from '../components/Structural/Metas';
interface Props {
  children: JSX.Element;
}

export const BuildLayout: FC<Props> = ({ children }) => {
  const metaTags = {
    title: 'Build Landing Page',
    description: 'Build your Landing Page',
  };

  return (
    <>
      <Metas metaTags={metaTags} />
      <main style={{ position: 'relative' }}>
        <CustomMenu />
        <BuildMenu />
        <Container
          maxWidth="md"
          sx={{
            border: '1px dotted red',
            height: '100vh',
          }}
        >
          {children}
        </Container>
      </main>
    </>
  );
};
