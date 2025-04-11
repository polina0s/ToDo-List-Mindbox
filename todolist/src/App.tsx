import './App.css'
import Typography from '@mui/material/Typography';
import { TaskList } from './containers/TaskList';
import { Box } from '@mui/material';

function App() {

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

export default App
