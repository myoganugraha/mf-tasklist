import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TaskList/>
    </Provider>
  </StrictMode>
)

