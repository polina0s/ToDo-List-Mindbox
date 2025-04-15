import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { TaskList } from '../containers/TaskList';

export function TasksPage () {
    return (
        <>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h1">
          Todos
        </Typography>
      </Box>
        <TaskList/>
    </>
    )
}