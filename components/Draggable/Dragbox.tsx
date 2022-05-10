import { useRef, DragEvent, FC, useContext } from 'react';
import { DragContext } from '../../context/drag/DragContext';
import style from './Draggable.module.css';

interface Props {
  children: JSX.Element;
}

export const Dragbox: FC<Props> = ({ children }) => {
  const dragbox = useRef<HTMLDivElement>(null);
  const { finishMoveElement, isDragging, element } = useContext(DragContext);
  //Draggable element is dropped a drop zone
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  //Draggable element is over a drop zone
  //Todo Change position from element
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const elementId = event.dataTransfer.getData('text');
    //Dragbox axis
    const yAxis = event.nativeEvent.offsetY;
    //pixels from Draggable div
    const { offsetWidth, offsetHeight } = event.target as any;

    getDragAfterElements(dragbox.current as Node, yAxis, elementId);

    if (dragbox.current !== null) {
      dragbox.current.appendChild(element as Node);
    }
    //console.log('x' + xAxis, 'y' + yAxis);
    //console.log(moveElement);

    finishMoveElement();
  };

  const getDragAfterElements = (
    container: Node,
    y: number,
    currentNode: any
  ) => {
    console.log(container);
    const draggableElements: Node[] = [...container.childNodes].filter(
      node => (node as HTMLElement).id !== currentNode
    );

    //aqui
    console.log(draggableElements);

    return draggableElements.reduce(
      (closest: any, child: any) => {
        const box = child.getBoundingClientRect();
        //Get middle of between box children
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.POSITIVE_INFINITY,
      }
    ).element;
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {};

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {};

  return (
    <div
      ref={dragbox}
      id="dragbox"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      style={{
        width: '100%',
        height: ' 50%',
      }}
      className={isDragging ? style.dragging : ''}
    >
      {children}
    </div>
  );
};
