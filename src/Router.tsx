import { Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
  )
}
