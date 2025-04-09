
  import './App.scss';
  import Homepage from './components/Homepage/Hompage';
  import Postbar from './components/Postbar/Postbar';
  import Profilebar from './components/Profilebar/Profilebar';
  import ProtectedRoute from './components/ProtectedRoutes';
  import Searchbar from './components/Searchbar/Searchbar';
  import SignIn from './components/SignIn/SignIn';
  import SignUp from './components/SignUp/SignUp';
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import { AuthProvider } from './Context/AuthProvider';
import Notes from './components/Notes/Notes';




  function App() {


    return (
      <AuthProvider>
      
      <Router>
      <div className="App">
          <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Home' element={<ProtectedRoute><Homepage/></ProtectedRoute>}/>
          <Route path='/Search' element={<ProtectedRoute><Searchbar/></ProtectedRoute>}/>
          <Route path='/Post' element={<ProtectedRoute><Postbar/></ProtectedRoute>}/>
          <Route path='/Profile' element={<ProtectedRoute><Profilebar/></ProtectedRoute>}/>
          <Route path='/Notes/:id' element={<ProtectedRoute><Notes/></ProtectedRoute>}/>


          </Routes>


      </div>
      </Router>
      </AuthProvider>

    );
  }

  export default App;
