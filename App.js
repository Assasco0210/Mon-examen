import Header from './Components/Header'; 
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Connect from './Pages/Connect';
import Inscription from './Pages/Inscription';


function App() {
  return (
    <div className="App">
      
       <Header/>
       <ToastContainer position="top-center" />
       
       <Connect/>
       <Inscription/>
                  
             
    </div>
  );
}

export default App;
