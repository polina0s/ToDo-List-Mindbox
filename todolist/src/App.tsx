import './App.css'
import Typography from '@mui/material/Typography';
import { TaskList } from './containers/TaskList';

function App() {

  return (
    <>
      <div>
        <Typography variant="h1">
          Todos
        </Typography>
        <TaskList/>
      </div>
    </>
  )
}

export default App
