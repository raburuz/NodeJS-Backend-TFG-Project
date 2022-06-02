import { DragEvent, RefObject, useContext, useState } from 'react';
import { DragContext } from '../context/drag/DragContext';

interface Props {
  element: RefObject<HTMLDivElement>;
  style: string;
}

export const useDraggable = ({ element, style }: Props) => {
  const [isDragging, setIsDragging] = useState('');

  const { startMoveElement, finishMoveElement, onDragEnterElement } =
    useContext(DragContext);

  const handleDragStart = (event: DragEvent<HTMLParagraphElement>) => {
    startMoveElement(element.current as Node);
    setIsDragging(style);
  };

  const handleDragEnd = (event: DragEvent<HTMLParagraphElement>) => {
    finishMoveElement();
    setIsDragging('');
  };
  const handleDragEnter = (event: DragEvent<HTMLParagraphElement>) => {
    onDragEnterElement(element.current as Node);
  };
  return {
    isDragging,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  };
};
