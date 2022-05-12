import { useContext } from 'react';
import { Container } from '@mui/material';
import { BuildMenu } from './BuildMenu';
import { CustomMenu } from './CustomMenu';
import { DragProvider } from '../../context/drag/DragProvider';
import { Dragbox, Typo } from '../Draggable';

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
          height: '100%',
          minHeight: '1080px',
          color: '#000',
        }}
      >
        <DragProvider>
          <Dragbox>
            <>
              {components?.map((component: any) => {
                if (component.type === 'text') {
                  return (
                    <Typo
                      key={component.id}
                      id={component.id}
                      label={component.label}
                      tag={component.tag}
                      sx={component.sx}
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
