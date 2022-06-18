import { useContext, useRef } from 'react';
import { BuildContext } from '../../../context';
import { useDraggable } from '../../../hooks/useDraggable';
import { ImageComponent } from '../../../interfaces';
import style from './Image.module.css';

interface Props {
  data: ImageComponent;
}

export const Image = ({ data }: Props) => {
  // const { id, order, urlLink ,url, sx } = data;
  const { id, order ,url, sx } = data;
  const element = useRef<HTMLDivElement>(null);
  const {activeComponent,active} =  useContext(BuildContext);
  const {
    isDragging,
    handleDragEnd,
    handleDragStart,
    handleDragEnter,
  } = useDraggable({ element, style: '' });
  
  const handleActiveClick = ( data:any) => {
    console.log(data);
     activeComponent(data);

  }
  return (
    <div ref={element} id={id} onClick={() => handleActiveClick(data)}>
      <div
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        className={`${style.draggable} `}
        style={{
          opacity: isDragging ? 0.3 : 1,
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* {
            (url === '') ? (<a className={style.img} href={urlLink} style={sx} target="_blank" rel='noreferrer'></a>) 
            : (
                <a className={style.imgUploaded} href={urlLink} style={{width:'100%',height:'100%'}} target="_blank" rel='noreferrer'>
                        <img style={sx}  src={url} />
                </a>
                
              )

        } */}
        
        {
            (url === '') ? (<a className={style.img} style={sx} target="_blank" rel='noreferrer'></a>) 
            : (
                <a className={style.imgUploaded} style={{width:'100%',height:'100%'}} target="_blank" rel='noreferrer'>
                        <img style={sx}  src={url} />
                </a>
                
              )

        }


      </div>
    </div>
  );
};
