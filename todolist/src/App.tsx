import './App.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { TasksPage } from './components/pages';

function App() {

  return (
    <>
    <StyledEngineProvider injectFirst>
        <TasksPage/>
    </StyledEngineProvider>
    </>
  )
}

export default App
