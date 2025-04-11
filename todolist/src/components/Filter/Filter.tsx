import { Box, Button, Typography } from '@mui/material';
import styles from './Filter.module.css'

export function Filter ({quantity}: {quantity: number}) {
    return (
        <Box className={styles.container}>
            <Typography>{quantity} {quantity === 1 ? 'item' : 'items'} left</Typography>
            
            <Box>
                <Button variant='outlined' size='medium' color='warning'>All</Button>
                <Button size='medium' color='warning'>Active</Button>
                <Button size='medium' color='warning'>Completed</Button>
            </Box>    
          
            <Button size='medium' color='warning'>Clear completed</Button>
        </Box>
    )
}