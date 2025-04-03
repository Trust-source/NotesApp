
import './App.scss';
import Homepage from './components/Homepage/Hompage';
import Postbar from './components/Postbar/Postbar';
import Profilebar from './components/Profilebar/Profilebar';
import Searchbar from './components/Searchbar/Searchbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {


  return (
    <Router>
    <div className="App">
        <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Home' element={<Homepage/>}/>
        <Route path='/Search' element={<Searchbar/>}/>
        <Route path='/Post' element={<Postbar/>}/>
        <Route path='/Profile' element={<Profilebar/>}/>
        </Routes>


    </div>
    </Router>
  );
}

export default App;
