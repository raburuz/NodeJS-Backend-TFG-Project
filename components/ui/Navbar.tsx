import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import FiberNewTwoToneIcon from '@mui/icons-material/FiberNewTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';

export const Navbar = () => {
  const [value, setValue] = useState('recents');
  const router = useRouter();

  const onLink = (href: string) => {
    router.push(href);
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4} md={7}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '10%',
              height: '100%',
              paddingLeft: 10,
            }}
          >
            BaduBai
          </Box>
        </Grid>
        <Grid item xs={8} md={5}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginLeft: 5,
              maxWidth: 500,
            }}
          >
            <BottomNavigationAction
              label="Build"
              value="build"
              icon={<FiberNewTwoToneIcon />}
              onClick={() => onLink('/build')}
            />

            <BottomNavigationAction
              label="Templates"
              value="templates"
              icon={<FolderIcon />}
              onClick={() => onLink('/templates')}
            />

            <BottomNavigationAction
              label="Login"
              value="login"
              icon={<AccountCircleTwoToneIcon />}
              onClick={() => onLink('/auth/login')}
            />

            <BottomNavigationAction
              label="Settings"
              value="settings"
              icon={<SettingsApplicationsTwoToneIcon />}
              onClick={() => onLink('/templates')}
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    </nav>
  );
};
