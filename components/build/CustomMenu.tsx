import { SyntheticEvent, useContext, useEffect, useRef, useState } from 'react';
import { Tab, Tabs, Box, Typography, Snackbar, Alert } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { HexColorPicker } from "react-colorful";
import { TabPanel } from '../ui';
import { CustomMenuLayout } from '../../layouts';
import { BuildContext } from '../../context';
import style from './custommenu.module.css'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FilterListIcon from '@mui/icons-material/FilterList';
import ImageIcon from '@mui/icons-material/Image';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UploadFileIcon from '@mui/icons-material/UploadFile';


const PrettoSlider = styled(Slider)({
  color: 'linear-gradient(30deg, rgba(121,82,119,0.975) 30%, #355192 85%)',
  height: 8,
  marginTop:40,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#355192',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#355192',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});




export const CustomMenu = () => {
  const [value, setValue] = useState<number>(0);
  const [color, setColor] = useState("#121212");
  const [heigth, setHeigth] = useState(5);
  const {active,addComponent,changeColorPage,activeComponent, updateActiveComponent,deletedComponent }  =  useContext(BuildContext);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setActiveComponent(active)
  }, [active])

  const [activeModify, setActiveComponent] = useState(active);

  useEffect(() => {
    updateActiveComponent(activeModify)
  }, [activeModify])

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpen(false);
  };
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const   handleClickDelete = (id:string ) => {
    deletedComponent(id);
  }

  console.log(activeModify);

  
  const onFileInputChange = ({target}:any) => {
    console.log(target.file);

  }
  const handleChangeColor = (value:string ) => {
    setColor(value)
    changeColorPage(value);


  }
  const handleChangeHeigth = (event:any ) => {
    
    console.log(event.target.value)
    setHeigth(event.target.value)
    if(active.type === ''){
      setOpen(true);
    }else{
      
     
            setActiveComponent((state:any) => ({
                            
              ...state,    
              sx: {
                ...state.sx,
                height: event.target.value
              }      
          
        }));
        updateActiveComponent(activeModify);


      
    }
  }


  
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <>
    <Box
      sx={{
        width: 300,
        position: 'fixed',
        left: 0,
        top: 0,
        bgcolor: '#313131',
        zIndex: 9999,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Crate your page here"
          centered
        >
          {
           (active.type === 'text') ? (<Tab icon={<TextFieldsIcon />} {...a11yProps(0)}  /> ): 
           (active.type === 'button') ?  (<Tab icon={<RadioButtonUncheckedIcon />} {...a11yProps(0)} />) : (active.type === 'list') ?
           (<Tab icon={<FilterListIcon />} {...a11yProps(0)} />) : (active.type === 'image') ? (<Tab icon={<ImageIcon />} {...a11yProps(0)} />) :
           (<Tab icon={<TextFieldsIcon />} {...a11yProps(0)}  /> )
           
          } 
    

          <Tab icon={<ColorLensIcon />} {...a11yProps(1)} />
          <Tab icon={<EnhancedEncryptionIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>

      
      <TabPanel value={value} index={0} >
     
        <Typography sx={{color:'white'}}>Width:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        <Typography sx={{color:'white'}}>Heigth:</Typography>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={heigth}
            max={400}
            onChange={handleChangeHeigth}
          />
          <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
            <Box sx={{color:'white',backgroundColor:'#355192',borderRadius:'15px',width:'50px',textAlign:'center',cursor:'pointer'}} onClick={() => fileInputRef.current?.click()}  hidden={(active.type === 'image') ? false : true }><UploadFileIcon/></Box>
            <Box sx={{color:'white',backgroundColor:'#355192',borderRadius:'15px',width:'50px',textAlign:'center',cursor:'pointer'}} onClick={() =>   handleClickDelete(active.id)} hidden={(active.type === '') ? true : false }><DeleteForeverIcon/></Box>
          </Box>
          <input type="file" onChange={onFileInputChange}  ref={fileInputRef as React.LegacyRef<HTMLInputElement>} style={{display:'none'}}/>
          
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomMenuLayout>
            <HexColorPicker className={style.reactColorful} color={color} onChange={handleChangeColor} />
   
        </CustomMenuLayout>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomMenuLayout>
          <h1>Hola</h1>
        </CustomMenuLayout>
      </TabPanel>
    </Box>
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  You have to select a component to remove it
                  </Alert>
     </Snackbar>
    </>
  );
};
