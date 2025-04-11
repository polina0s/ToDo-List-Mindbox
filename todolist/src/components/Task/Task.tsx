import { List, Typography } from '@mui/material';
import styles from './Task.module.css'


export function Task ({name}: {name: string}) {
    return (
        <List className={styles.container} component="div" disablePadding>
            <Typography>{name}</Typography>
        </List>
    )
}