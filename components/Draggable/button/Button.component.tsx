import { useRef } from 'react';
import { useDraggable } from '../../../hooks/useDraggable';
import { ButtonComponent } from '../../../interfaces';
import style from './Button.module.css';

interface Props {
  data: ButtonComponent;
}

export const Button = ({ data }: Props) => {
  const { id, label, order, url, sx } = data;
  const element = useRef<HTMLDivElement>(null);
  const {
    isDragging,
    handleDragEnd,
    handleDragStart,
    handleDragEnter,
  } = useDraggable({ element, style: '' });

  return (
    <div ref={element} id={id}>
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
        <a className={style.btn} href={url} style={sx} target="_blank">
          {label}
        </a>
      </div>
    </div>
  );
};
