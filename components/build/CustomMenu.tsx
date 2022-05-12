import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

import { TabPanel } from '../ui';
import { CustomMenuLayout } from '../../layouts';

export const CustomMenu = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <CustomMenuLayout>
          <h1>Hola</h1>
        </CustomMenuLayout>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomMenuLayout>
          <h1>Hola</h1>
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
