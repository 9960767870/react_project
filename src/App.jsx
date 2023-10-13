import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { TextFrom } from './Components/TextFrom';
import { useState } from 'react';
import About from './Components/About';
import { Alert } from './Components/Alert';
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom";
import { Header } from './Components/Header';



// import { Header } from './Components/Header';


// const DemoFunction =(props)=>{
// return (<div>
// <h1>
//   {props.name}
// </h1>
// <h1>{props.age}</h1>
// </div>);

// }

function App() {
  const [darkMode, setDarkMode] = useState('light');

  const [alert, settAlert] = useState(null)

  const showAlert = (message, type) => {

    settAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      settAlert(null)
    }, 2000);

  }


  const toggleMode = () => {

    if (darkMode === 'light') {

      setDarkMode('dark')
      // document.body.style.backgroundColor='#042743'
      showAlert("DarkMode Has Been anabled", "success")
    } else {
      setDarkMode('light')
      // document.body.style.backgroundColor='white'
      showAlert("LightMode Has Been anabled", "success")
    }
  }
  return (
    <>
      <Router>
        {/* //calling nav function */}
        {/* <Nav title1="Home" title2="About" title3="Contact" title4="Service" title5="Careers" mode={darkMode}/>  */}
        <hr />
        {/* <Nav title1="Screen" title2="About Us" title3="Number" title4="Service-1" title5="Careers-1" mode={darkMode}/>   */}
        {/* <About mode={darkMode} toggleMode={toggleMode} /> */}
        {/* <Alert alert={alert} /> */}

        <Routes>
          <Route extract path="/" element={<TextFrom showAlert={showAlert} />} />
          {/* <Route extract path="/about" element={<About mode={darkMode} />} /> */}
          <Route extract path="/header" element={<Header />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
