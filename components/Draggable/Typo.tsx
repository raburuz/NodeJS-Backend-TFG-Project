import {
  useState,
  useRef,
  useContext,
  FC,
  DragEvent,
  StyleHTMLAttributes,
} from 'react';
import { DragContext } from '../../context/drag/DragContext';
import { TextTags } from '../../interfaces';
import style from './Draggable.module.css';

interface Props {
  id: string;
  label: string;
  tag: TextTags;
  sx?: StyleHTMLAttributes<HTMLStyleElement>;
}

export const Typo: FC<Props> = ({ id, label, tag, sx }) => {
  const Tag = tag;
  const [isDragging, setIsDragging] = useState('');

  const element = useRef<HTMLDivElement>(null);
  const { startMoveElement, finishMoveElement, onDragEnterElement } =
    useContext(DragContext);

  const handleDragStart = (event: DragEvent<HTMLParagraphElement>) => {
    startMoveElement(element.current as Node);
    setIsDragging(style.dragging);
  };

  const handleDragEnd = (event: DragEvent<HTMLParagraphElement>) => {
    finishMoveElement();
    setIsDragging('');
  };
  const handleDragEnter = (event: DragEvent<HTMLParagraphElement>) => {
    onDragEnterElement(element.current as Node);
  };

  return (
    <div ref={element} className="drag_element" id={id}>
      <Tag
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        style={{
          ...sx,
          padding: '10px ',
          margin: 0,
          opacity: isDragging ? 0.3 : 1,
          transition: 'all 0.3s',
        }}
        className={`${style.draggable} `}
      >
        {label}
      </Tag>
    </div>
  );
};
