import { useContext } from 'react';
import { Container } from '@mui/material';
import { BuildMenu } from './BuildMenu';
import { CustomMenu } from './CustomMenu';
import { DragProvider } from '../../context/drag/DragProvider';
import { Dragbox, Typo } from '../Draggable';
import { ContentType } from '../../interfaces';

import { BuildContext } from '../../context/build/BuildContext';

export const BuildMain = () => {
  const { components, page } = useContext(BuildContext);

  return (
    <main
      style={{
        position: 'relative',
        backgroundColor: page.backgroundColor,
      }}
    >
      <BuildMenu />
      <CustomMenu />
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: '#000',
        }}
      >
        <DragProvider>
          <Dragbox>
            <>
              {components?.map((component: any) => {
                if (component.type === ContentType.TEXT) {
                  return (
                    <Typo
                      key={component.id}
                      id={component.id}
                      label={component.label}
                      sx={component.sx}
                      p
                    />
                  );
                }
              })}
            </>
          </Dragbox>
        </DragProvider>
      </Container>
    </main>
  );
};
