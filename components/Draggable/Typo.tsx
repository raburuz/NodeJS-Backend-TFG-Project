import React, {
  DragEvent,
  StyleHTMLAttributes,
  useContext,
  useRef,
} from 'react';
import style from './Draggable.module.css';
import { DragContext } from '../../context/drag/DragContext';

interface Props {
  id: string;
  label: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;

  sx?: StyleHTMLAttributes<HTMLStyleElement>;
}

export const Typo = ({ id, label, sx, ...props }: Props) => {
  const element = useRef<HTMLDivElement>(null);
  const { startMoveElement, finishMoveElement, isDragging } =
    useContext(DragContext);

  const { p, h1, h2, h3 } = props;

  const handleDragStart = (event: DragEvent<HTMLParagraphElement>) => {
    event.dataTransfer.setData('text', id);
    startMoveElement(element.current as Node);
  };

  const handleDragEnd = (event: DragEvent<HTMLParagraphElement>) => {
    finishMoveElement();
  };

  return (
    <div ref={element} className="drag_element" id={id}>
      {p && (
        <p
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            ...sx,
            margin: '20px 0',
            opacity: isDragging ? 0.3 : 1,
            transition: 'all 0.3s',
          }}
          className={(isDragging ? style.dragging : '', style.draggable)}
        >
          {label}
        </p>
      )}
      {h1 && (
        <h1
          onDragStart={handleDragStart}
          draggable="true"
          style={{
            ...sx,
            position: 'absolute',
            margin: 0,
            top: 29,
            left: 77,
          }}
          className={style.draggable}
        >
          {label}
        </h1>
      )}
      {h2 && (
        <h2
          onDragStart={handleDragStart}
          draggable="true"
          style={{ ...sx, position: 'absolute' }}
          className={style.draggable}
        >
          {label}
        </h2>
      )}
      {h3 && (
        <h3
          onDragStart={handleDragStart}
          draggable="true"
          style={{ ...sx, position: 'absolute' }}
          className={style.draggable}
        >
          {label}
        </h3>
      )}
    </div>
  );
};
