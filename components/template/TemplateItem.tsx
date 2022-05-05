import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import { TabPanel } from '../ui';
import { TemplateList } from './TemplateList';

export const TemplateItem = () => {
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
    <>
      <Box sx={{ width: '100%', marginTop: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="Template for build your page"
            centered
          >
            <Tab label="Free Templates" {...a11yProps(0)} />
            <Tab label="Landing Page" {...a11yProps(1)} />
            <Tab label="Portfolio" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TemplateList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TemplateList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TemplateList />
        </TabPanel>
      </Box>
    </>
  );
};
