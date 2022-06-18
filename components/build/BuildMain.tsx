import { useContext } from 'react';
import { Container } from '@mui/material';
import { BuildMenu } from './BuildMenu';
import { CustomMenu } from './CustomMenu';
import { DragProvider } from '../../context/drag/DragProvider';
import { Dragbox, Typo } from '../Draggable';

import { BuildContext } from '../../context/build/BuildContext';
import { List } from '../Draggable/list/List.component';
import { Button } from '../Draggable/button/Button.component';
import { Image } from '../Draggable/image/Image.component';

export const BuildMain = () => {
  const { components, page } = useContext(BuildContext);
  
  return (
    <main
      style={{
        position: 'relative',
        backgroundColor: page.backgroundColor,
        lineHeight: 1.5,
        backgroundImage:
          'radial-gradient(#ddd 1px,transparent 0),radial-gradient(#ddd 1px,transparent 0)',
        backgroundPosition: '0 0,25px 25px',
        backgroundAttachment: 'fixed',
        backgroundSize: '50px 50px',
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
                  return <Typo key={component.id} data={component}/>;
                }
                if (component.type === 'list') {
                  return <List key={component.id} data={component} />;
                }
                if (component.type === 'button') {
                  return <Button key={component.id} data={component} />;
                }
                if (component.type === 'image') {
                 
                  return <Image key={component.id} data={component} />;
                }

              })}

            </>
          </Dragbox>
        </DragProvider>
      </Container>
    </main>
  );
};
