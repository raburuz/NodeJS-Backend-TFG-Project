import { Components } from '@mui/material';

import {Component} from '../../interfaces'
import {TypoComponent} from '../../interfaces'
type Action =
  | {
      type: 'Build - Add New Component';
      components: Components;
    }
  | {
      type: 'Build - Active Component';
      activeComponent: {};
    }
  | {
      type: 'Build - Update Active Component';
      components: Component;    }
  | {
      type: 'Build - Update One Component';
      backgroundColor: string;
    }
  | {
      type: 'Build - Change Color Page';
      backgroundColor: string;
    }

  | {
    type: 'Build - Change text element';
    components: TypoComponent;
  }
| {
      type: 'Build - Deleted Component';
      id: string;
    }
| {
      type: 'Build - Add Url Image';
      id: string;
      url:string;
    }
    
  ;

export const BuildReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'Build - Add New Component':
      return {
        ...state,
        components: [...state.components, action.components],
      };
      case 'Build - Active Component':
        return {
          ...state,
          active: action.activeComponent,
        };
      case 'Build - Update One Component':
      return {
        ...state,
      };
      case 'Build - Update Active Component':

        return {
            ...state,
            components: state.components.map(
                (c:any) =>{
                  if(c.id === action.components.id){
                    return {...c,sx:action.components.sx}
                  }
                  return c;
                }
                // (c.id === action.components.id ) ? action.components : c
            )
        };
        
        case 'Build - Deleted Component':
          return {
            ...state,
            components:state.components.filter(
              (e:any) => (e.id !== action.id )
          ), 
          };

          

          case 'Build - Change Color Page':
            return {
              ...state,
              page: { backgroundColor: action.backgroundColor },
            };
        case 'Build - Add Url Image':
          return {
            ...state,
            components: state.components.map(
                (c:any) =>{
                  if(c.id === action.id){
                    return {...c,url:action.url}
                  }
                  return c;
                }
            )
              };

      case 'Build - Change text element':

        return {
            ...state,
            components: state.components.map(
                (c:any) =>{
                  if(c.id === action.components.id){
                    return {...c,label:action.components.label}
                  }
                  return c;
                }
                // (c.id === action.components.id ) ? action.components : c
            )
        };  

    default:
      return state;
  }
};
