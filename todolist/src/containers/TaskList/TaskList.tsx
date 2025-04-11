import { useState } from 'react';
import { Box,  Collapse, InputBase, ListItemButton } from '@mui/material';
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
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="What needs to be done?" inputProps={{ 'aria-label': 'search google maps' }}/>
            </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Task name='aaa'/>
        </Collapse>   

        <Filter/>

        </Box>
      </>
    )
}