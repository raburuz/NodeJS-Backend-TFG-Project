import { useRef, FC, StyleHTMLAttributes } from 'react';
import style from './Typo.module.css';
import { TextTags } from '../../../interfaces';
import { useDraggable } from '../../../hooks/useDraggable';

interface Props {
  data: {
    id: string;
    label: string;
    tag: TextTags;
    sx?: StyleHTMLAttributes<HTMLStyleElement>;
  };
}
export const Typo: FC<Props> = ({ data }) => {
  const { id, label, tag, sx } = data;
  const Tag = tag;
  const element = useRef<HTMLDivElement>(null);

  const {
    isDragging,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  } = useDraggable({ element, style: style.draggable });

  return (
    <div ref={element} id={id}>
      <Tag
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        style={{
          textAlign: 'center',
          padding: '10px ',
          margin: 0,
          opacity: isDragging ? 0.3 : 1,
          transition: 'all 0.3s',
          ...sx,
        }}
        className={`${style.draggable} `}
      >
        {label}
      </Tag>
    </div>
  );
};
