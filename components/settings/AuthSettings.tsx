 
import React, { useContext } from 'react';
import { RegisterOptions } from 'react-hook-form';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../context';
import style from './settings.module.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


interface InputComponent {
    name: string;
    label: string;
    type?: string;
    defaultValue?: string;
    rules?: RegisterOptions;
  }
  
  const inputs: InputComponent[] = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      rules: { required: 'This field is required' },
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      rules: {
        required: 'This field is required',
      },
    },
  ];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const { userData, logout } = useContext(AuthContext);

  console.log(userData);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

 export function AuthSettings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { userData } = useContext(AuthContext);
  console.log(userData)

  return (
    <Box
      sx={{width:'100%'}}
    >
    {/* //   <Tabs 
    //     orientation="vertical"
    //     variant="scrollable"
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="Vertical tabs example"
    //     sx={{ borderRight: 1, borderColor: 'divider' }}
    //   >
    //     <Tab label="Item One" {...a11yProps(0)} />
    //     <Tab label="Item Two" {...a11yProps(1)} />
    //     <Tab label="Item Three" {...a11yProps(2)} />
    //     <Tab label="Item Four" {...a11yProps(3)} />
    //     <Tab label="Item Five" {...a11yProps(4)} />
    //     <Tab label="Item Six" {...a11yProps(5)} />
    //     <Tab label="Item Seven" {...a11yProps(6)} />
    //   </Tabs>
    //   <TabPanel value={value} index={0}>
    //     Item One
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     Item Two
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     Item Three
    //   </TabPanel>
    //   <TabPanel value={value} index={3}>
    //     Item Four
    //   </TabPanel>
    /  <TabPanel value={value} index={4}>
         Item Five
       </TabPanel>
       <TabPanel value={value} index={5}>
         Item Six
       </TabPanel>
       <TabPanel value={value} index={6}>
         Item Seven
      </TabPanel> */}
        <div className={style.Contsetting}>
            <h1 className={style.titleUser}>User setting</h1>
            <div className={style.log}>
                <div className={style.imagePerfil}>
                <Stack direction="row" spacing={10}>
                    <Avatar  sx={{ width: 250, height: 250 }} alt="Usuario" src="/static/images/avatar/1.jpg" />
                </Stack>
                </div>
                <div className= {style.inputPerfil}>
                    <TextField value={userData.user?.username} id="margin-none" sx={{border:'1px solid #bdbdbd'}}/>
                    <TextField value={userData.user?.email} id="margin-none" sx={{border:'1px solid #bdbdbd'}}/>
                    <TextField value="*******" id="margin-none" sx={{border:'1px solid #bdbdbd'}}/>
                    <Button variant="text" sx={{background:'purple',color:'white'}}>Update</Button>
                </div>
            </div>
        </div>  
    </Box>
    
  );
}