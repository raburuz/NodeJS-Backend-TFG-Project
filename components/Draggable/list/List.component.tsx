import { useContext, useRef } from 'react';
import { ListComponent } from '../../../interfaces';
import { useDraggable } from '../../../hooks/useDraggable';
import style from './List.module.css';
import { BuildContext } from '../../../context';

interface Props {
  data: ListComponent;
}

export const List = ({ data }: Props) => {
  const { id, items, sx } = data;
 const {activeComponent} =  useContext(BuildContext);
  const element = useRef<HTMLDivElement>(null);
  const { isDragging, handleDragEnd, handleDragStart, handleDragEnter } =
    useDraggable({ element, style: '' });

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
        }}
      >
        <ul>
          {items.map((item, index) => {
            return (
              <li style={sx} key={`${id}-Item${index}${item}`}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
