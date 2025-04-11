import { useRef, useState } from 'react';
import { Box, FormGroup, InputBase} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import styles from './TaskList.module.css'
import { Filter } from '../../components/Filter';
import { Task } from '../../components/Task';
import { createTask } from '../../useCases';
import { TaskInterface } from '../../entities';
import { taskStorage } from '../../lib';



export function TaskList () {
  const [tasks, setTasks] = useState<TaskInterface[]>(taskStorage.getTasks())
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

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.input}>
          <ExpandMore />
          <InputBase inputRef={input} onKeyDown={handleKeyDown} id='input' sx={{ ml: 1, flex: 1 }} placeholder="What needs to be done?" inputProps={{ 'aria-label': 'search google maps' }}/>
        </Box>
          <FormGroup>
            {tasks.map(({name, id}) => <Task status={false} name={name} id={id} key={id}/>)}
          </FormGroup>        
        <Filter quantity={tasks.length}/>
        </Box>
      </>
  )
}