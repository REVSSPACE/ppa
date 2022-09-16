import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ApplicantDetails from './Applicant';

export default function DocTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Land Ownership Details" value="1" />
            <Tab label="Document List" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1">
        <ApplicantDetails />
        </TabPanel>
        <TabPanel value="2">
        <ApplicantDetails />
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}
