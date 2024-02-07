import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton 
      to={'/'}
      component={Link}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton
      to={"/search"}
      component={Link}
    >
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItemButton>
    <ListItemButton 
      to={"/article"}
      component={Link}
    >
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Article" />
    </ListItemButton>
    <ListItemButton
      to={"/upload"}
      component={Link}
    >
      <ListItemIcon>
        <DocumentScannerIcon />
      </ListItemIcon>
      <ListItemText primary="Document" />
    </ListItemButton>
    <ListItemButton
      to={"/projects"}
      component={Link}
    >
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Project" />
    </ListItemButton>
  </React.Fragment>
);