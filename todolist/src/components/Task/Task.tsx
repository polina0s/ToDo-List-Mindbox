import { Box, Checkbox, FormControlLabel, List } from '@mui/material';
import { TaskInterface } from '../../entities';
import { useState } from 'react';
import styles from './Task.module.css'

export function Task ({name, status, id}: TaskInterface) {
    const [checked, setChecked] = useState(status);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box className={styles.container} id={id.toString()}>
            <List component="div" disablePadding sx={{padding: '8px 16px'}}>
                <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={name} />
            </List>
        </Box>
    )
}