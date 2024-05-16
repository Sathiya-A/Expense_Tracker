
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login';


function App() {
  return (
    <Router>
      <div className="App">
        
            <Routes>
              <Route exact path="/" element={<Login />} />
            </Routes>
            </div>
      
    </Router>
  
  );
}

export default App;
