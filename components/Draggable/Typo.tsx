import React, {
  DragEvent,
  StyleHTMLAttributes,
  useContext,
  useRef,
} from 'react';
import style from './Draggable.module.css';
import { DragContext } from '../../context/drag/DragContext';
import { useState } from 'react';

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
  const [isDragging, setIsDragging] = useState('');
  const [isEnter, setIsEnter] = useState(false);

  const element = useRef<HTMLDivElement>(null);
  const { startMoveElement, finishMoveElement, onDragEnterElement } =
    useContext(DragContext);

  const { p, h1, h2, h3 } = props;

  const handleDragStart = (event: DragEvent<HTMLParagraphElement>) => {
    event.dataTransfer.setData('text', id);
    startMoveElement(element.current as Node);
    setIsDragging(style.dragging);
    setIsEnter(false);
  };

  const handleDragEnd = (event: DragEvent<HTMLParagraphElement>) => {
    finishMoveElement();
    setIsDragging('');
    setIsEnter(false);
  };
  const handleDragEnter = (event: DragEvent<HTMLParagraphElement>) => {
    onDragEnterElement(element.current as Node);
    setIsEnter(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLParagraphElement>) => {
    setIsEnter(false);
  };

  return (
    <div ref={element} className="drag_element" id={id}>
      {p && (
        <p
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          style={{
            ...sx,
            padding: '10px 0',
            margin: 0,
            opacity: isDragging ? 0.3 : 1,
            transition: 'all 0.3s',
          }}
          className={`${style.draggable} ${isEnter ? style.enterElement : ''}`}
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
