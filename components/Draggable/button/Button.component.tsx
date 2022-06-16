import { useContext, useRef } from 'react';
import { BuildContext } from '../../../context';
import { useDraggable } from '../../../hooks/useDraggable';
import { ButtonComponent } from '../../../interfaces';
import style from './Button.module.css';

interface Props {
  data: ButtonComponent;
}

export const Button = ({ data }: Props) => {
  const { id, label, order, url, sx } = data;
  const element = useRef<HTMLDivElement>(null);
  const {activeComponent} =  useContext(BuildContext);
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
        <a className={style.btn} href={url} style={sx} target="_blank" rel='noreferrer'>
          {label}
        </a>
      </div>
    </div>
  );
};
