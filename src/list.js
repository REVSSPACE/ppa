import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function InsetList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
         
          <ListItemText  primary="Layout" />
        </ListItemButton>

      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText  primary="Building" />
        </ListItemButton>
              </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText  primary="Reclassification" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
