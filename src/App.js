import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/index'
import SigninPage from './pages/signin'
import './App.css';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;


// react router had a update and turned Switch to Routes in the new update //

