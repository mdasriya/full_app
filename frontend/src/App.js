
import Signup from './component/Signup';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Books from './component/Books';
import Bookadd from './component/Bookadd';

function App() {
  return (
    <div className="App">
<h1>React Application</h1>
<Routes>
  <Route path='/signup' element={<Signup />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/books' element={<Books />}></Route>
  <Route path='/add' element={<Bookadd />}></Route>
</Routes>
    </div>
  );
}

export default App;
