
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SiteDetails from './sitedetails';
import ApprovalDetails from './approval';
import Dwg from './dwg';
import Otherdetails from './other';


export default function ApplicationTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Site Details" value="1" />
            <Tab label="Approval Details" value="2" />
            <Tab label="Drawing" value="3" />
            <Tab label="Other Details" value="4" />
                
          </TabList>
        </Box>
        <TabPanel value="1">
        <SiteDetails />
        </TabPanel>
        <TabPanel value="2">
        <ApprovalDetails />
        </TabPanel>
        <TabPanel value="3">
        <Dwg />
        </TabPanel>
        <TabPanel value="4">
        <Otherdetails />  
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}
