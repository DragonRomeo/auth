import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Reset from './component/Reset/Reset';
import Dashboard from './component/Dashboard/Dashboard';

export const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};
