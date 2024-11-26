import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import Switch from 'react-router';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#6c757d';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      // <Router>
        <Navbar title="ReText" about="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3" >
          <Alert alert={alert} />
          // <Routes>
          //   <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} ></Route>
          //   <Route exact path='/' element={<TextForm heading="Enter the text below to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}></Route>
          // </Routes>
        </div>
      // </Router>
    </>
  );
}

export default App;
