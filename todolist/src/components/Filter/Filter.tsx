import { Box, Button, Typography } from '@mui/material';
import styles from './Filter.module.css'
import { brown } from '@mui/material/colors';

export function Filter () {
    return (
        <Box className={styles.container}>
            <Typography>0 items left</Typography>
            
            <Box>
                <Button variant='outlined' size='medium' color='warning'>All</Button>
                <Button size='medium' color='warning'>Active</Button>
                <Button size='medium' color='warning'>Completed</Button>
            </Box>    
          
            <Button size='medium' color='warning'>Clear completed</Button>
        </Box>
    )
}