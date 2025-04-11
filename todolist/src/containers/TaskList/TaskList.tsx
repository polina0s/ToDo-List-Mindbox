import { useState } from 'react';
import { Box,  Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import styles from './TaskList.module.css'
import { Filter } from '../../components/Filter';



export function TaskList () {
    const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


 
    return (
        <>
        <Box className={styles.container}>
            <ListItemButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary="What needs to be done?" />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

            {/* Tasks */}

            </List>
        </Collapse>   
        <Filter/>
        </Box>
      </>
    )
}