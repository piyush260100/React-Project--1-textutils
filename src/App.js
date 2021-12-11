// import logo from './logo.svg';
import './App2.css';
import { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from 'react'
import Alert from './components/Alert';
// import react router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


// let name="Piyush7";
function App() {

  const [mode, setMode] = useState('light');  //which mode is enable

  const [modeText, setModeText] = useState('Enable Light Mode');

  const [alert, setAlert] = useState(null);

  // const [theme,setTheme] =useState('light');

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleModeBlue = () => {
    console.log('toggle Mode');
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = "#09283E";
      showAlert(": Blue Mode has been enabled", "success");
      document.title = "TextUtils - Home Blue Mode";

    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert(": Light Mode has been enabled", "success");
      document.title = "TextUtils - Home Light Mode";
    }
  }

  const toggleModeGreen = () => {
    console.log('toggle Mode');
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = "#2a7908";
      showAlert(": Green Mode has been enabled", "success");
      document.title = "TextUtils - Home Green Mode";

    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert(": Light Mode has been enabled", "success");
      document.title = "TextUtils - Home Light Mode";
    }
  }


  const toggleModeYellow = () => {
    console.log('toggle Mode');
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = "#e4b31f";
      showAlert(": Yellow Mode has been enabled", "success");
      document.title = "TextUtils - Home Yellow Mode";

    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert(": Light Mode has been enabled", "success");
      document.title = "TextUtils - Home Light Mode";
    }
  }



  return (

    //JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
    // we can't return two html tag from a single return statement.
    // <h1>Hi, This is me!</h1> causes error
    // but inside jsx Fragment we can put more than one tag together.
    //Starting JSX Fragment
    <>

      {/* <Navbar title="TextUtils" contact="Contact Us"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModeYellow={toggleModeYellow} modeText={modeText} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}></TextForm>}> */}
            {/* </Route> */}
          {/* </Routes> */}

          <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}></TextForm>
        </div>
      {/* </Router> */}


    </>
    // Ending JSX Fragment
  );
}

export default App;
