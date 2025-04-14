import { useMemo, useRef, useState } from 'react';
import { Box, Button, FormGroup, InputBase, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import styles from './TaskList.module.css'
import { Footer } from '../../components/Footer';
import { Task } from '../../components/Task';
import { changeTaskStatus, createTask, deleteCompletedTasks, filterTaskByStatus } from '../../useCases';
import { ITask } from '../../entities';
import { taskStorage } from '../../lib';



export function TaskList () {
  const [tasks, setTasks] = useState<ITask[]>(taskStorage.getTasks())
  const [tasksStatus, setTasksStatus] = useState<'active' | 'completed' | 'all'>('all');
  const filteredTasks = useMemo(() => {
    if (tasksStatus !== 'all') {
      return filterTaskByStatus({tasks: tasks, status: tasksStatus})
    } else {
      return tasks;
    }
  }, [tasks, tasksStatus])
  const input = useRef<HTMLInputElement>(null);

  const createNewTask = ({name}: {name: string}) => {
    const task = createTask({name: name});
    setTasks((old) => taskStorage.setTasks([...old, task]));
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        const value = input?.current?.value;
        if (value) {
            createNewTask({name: value})
            input.current!.value = '';
        }
    }
  };

  const clearCompletedTasks = () => {
    const activeTasks = deleteCompletedTasks(tasks);
    taskStorage.setTasks(activeTasks);
    setTasks(activeTasks);
  } 

  const handleChangeTaskStatus = (task: ITask) => {
    const changedTask = changeTaskStatus(task);
    const newList = tasks.map((el) => el.id === task.id ? (el = changedTask) : el)
    setTasks(newList);
    taskStorage.setTasks(newList)
  }




  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    status: 'active' | 'completed' | 'all',
  ) => {
    if (status !== null){
      setTasksStatus(status)
    };

  };


  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.input}>
          <ExpandMore />
          <InputBase inputRef={input} onKeyDown={handleKeyDown} id='input' sx={{ ml: 1, flex: 1 }} placeholder="What needs to be done?"/>
        </Box>
          <FormGroup>
            {filteredTasks?.map(({name, status, id}) => <Task handleChangeStatus={() => handleChangeTaskStatus({name, status, id})} status={status} name={name} id={id} key={id}/>)}
          </FormGroup>        
        <Footer 
          Quantity={<Typography>{filteredTasks.length} {tasks.length === 1 ? 'item' : 'items'} left</Typography>}
       Filter={
        <Box>
          <ToggleButtonGroup
            color="warning"
            value={tasksStatus}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
          </ToggleButtonGroup>
    </Box> }
       ClearButton={<Button size='medium' color='warning' onClick={clearCompletedTasks}>Clear completed</Button>}
        />
        </Box>
      </>
  )
}