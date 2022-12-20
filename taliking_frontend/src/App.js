import { React} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import Login from './components/Login';
import Home from './continer/Home';

const App = () => {

//const navigate = useNavigate();

 // useEffect(() => {
 //   const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

 //   if (!User) navigate('/login');
 // }, []);


  return (
    //<h1>hellow</h1>
    <Routes>
      <Route path='Login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App