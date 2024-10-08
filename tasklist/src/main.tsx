import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskList from './App.tsx'
import './index.css'

import { mockTaskItemList } from './types/__mocks__/taskItems.mock.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskList taskList={mockTaskItemList}/>
  </StrictMode>,
)
