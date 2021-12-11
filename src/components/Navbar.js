import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>

          </ul>

          <div className={`form-check form-switch mx-1 text-${props.mode}==='light'?dark:light`}>
          <input className="form-check-input" onClick={props.toggleModeYellow} type="checkbox" role="switch" id="flexSwitchCheckDefaultyellow"/> Yellow 
          
          </div>

          <div className={`form-check form-switch mx-1 text-${props.mode}==='light'?dark:light`}>
            
          <input className="form-check-input" onClick={props.toggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefaultgreen"/> Green 
          </div>

          <div className={`form-check form-switch mx-3 text-${props.mode}==='light'?dark:light`}>
            
            <input className="form-check-input" onClick={props.toggleModeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefaultblue" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>{props.modeText}</label>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

//setting proptypes here so that if we provided wrong proptype to the props then we get an error in the console.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};
//isRequired is used to give user an error if we don't provide values to the props and no default value is set

//Setting default props value if no prop value is provided in app.js we used these values
Navbar.defaultProps = {
  title: 'Set Title here',
  about: "About",
};