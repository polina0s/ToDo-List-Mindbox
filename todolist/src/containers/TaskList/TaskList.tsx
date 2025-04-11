import { useState } from 'react';
import { Box,  Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import styles from './TaskList.module.css'
import { Filter } from '../../components/Filter';
import { Task } from '../../components/Task';



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
            <Task name='aaa'/>
        </Collapse>   

        <Filter/>

        </Box>
      </>
    )
}