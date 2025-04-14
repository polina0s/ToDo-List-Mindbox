import { Box, Checkbox, FormControlLabel, List } from '@mui/material';
import styles from './Task.module.css'
import { ITask } from '../../entities';

interface TaskProps {
    name: string;
    status: 'active' | 'completed';
    id: number;
    handleChangeStatus: (task: ITask) => void;
}

export function Task ({name, status = 'active', id, handleChangeStatus}: TaskProps) {
    const checked = status === 'completed';

    return (
        <Box className={styles.container} id={id.toString()}>
            <List component="div" disablePadding sx={{padding: '8px 16px'}}>
                <FormControlLabel control={<Checkbox checked={checked} onChange={() => handleChangeStatus({name, status, id})} color='success'/>} label={name} />
            </List>
        </Box>
    )
}