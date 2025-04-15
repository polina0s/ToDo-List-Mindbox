import { StyledEngineProvider } from '@mui/material/styles';
import { TasksPage } from './pages';

function App() {

  return (
    <StyledEngineProvider injectFirst>
        <TasksPage/>
    </StyledEngineProvider>
  )
}

export default App
