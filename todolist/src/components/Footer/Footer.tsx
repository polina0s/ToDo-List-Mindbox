import { Box } from '@mui/material';
import styles from './Footer.module.css'
import { ReactNode } from 'react';

interface FooterProps {
    Quantity: ReactNode
    Filter: ReactNode
    ClearButton: ReactNode
}

export function Footer ({ClearButton, Filter, Quantity}: FooterProps) {
    return (
        <Box className={styles.container}>
          {Quantity}     
          {Filter}
          {ClearButton}
        </Box>
    )
}