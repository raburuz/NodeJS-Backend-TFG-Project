import { useRef, DragEvent, FC, useContext } from 'react';
import { DragContext } from '../../context/drag/DragContext';
import style from './Draggable.module.css';

interface Props {
  children: JSX.Element;
}

export const Dragbox: FC<Props> = ({ children }) => {
  const dragbox = useRef<HTMLDivElement>(null);
  const {
    finishMoveElement,
    onDragLeaveElement,
    isDragging,
    element,
    enterElement,
  } = useContext(DragContext);

  //Draggable element is dropped a drop zone
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(enterElement);
    if (!enterElement) {
      dragbox.current?.appendChild(element as Node);
    }
    dragbox.current?.insertBefore(element as Node, enterElement);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    finishMoveElement();
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {};

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    onDragLeaveElement();
  };

  return (
    <div
      ref={dragbox}
      id="dragbox"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      style={{
        width: '100%',
        height: 'auto',
        padding: '10px',
      }}
      className={isDragging ? style.dragging : ''}
    >
      {children}
    </div>
  );
};
