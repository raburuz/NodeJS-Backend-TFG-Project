import { SyntheticEvent, useContext, useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
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
  const {active,addComponent,changeColorPage }  =  useContext(BuildContext);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  console.log(active);
  const handleChangeColor = (value:string ) => {
    setColor(value)
    changeColorPage(value);


  }
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        width: 330,
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
          <Tab icon={<TextFieldsIcon />} {...a11yProps(0)} />
          <Tab icon={<ColorLensIcon />} {...a11yProps(1)} />
          <Tab icon={<EnhancedEncryptionIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CustomMenuLayout >
        
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </CustomMenuLayout>
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
  );
};
