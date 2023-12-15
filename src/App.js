import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';

export const App = () => {
  return (
    <div className='app'>
      <div>Hello</div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
