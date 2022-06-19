import { useRef, FC, StyleHTMLAttributes, useContext, useState, useEffect } from 'react';
import style from './Typo.module.css';
import { TextTags } from '../../../interfaces';
import { useDraggable } from '../../../hooks/useDraggable';
import { BuildContext } from '../../../context';

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
  const  [select,setSelect] = useState(false);

  const {active,activeComponent} = useContext(BuildContext);

  const {
    isDragging,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  } = useDraggable({ element, style: style.draggable });
 

  useEffect(() => {
 
  }, [active])



  
  const handleActiveClick = ( data:any,e:any) => {
   

     activeComponent(data);
    if(select){
      setSelect(false);
    }
    setSelect(true);
    console.log(e.target.classList.contains(style.selected))
  }
  return (
    <div ref={element} id={id} style={{width:'100%',height:'100%'}}>
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
        className={`${style.draggable} ${select && style.selected} `}
        onClick={(e) => handleActiveClick(data,e)}

      >
        {label}
      </Tag>
    </div>
  );
};
