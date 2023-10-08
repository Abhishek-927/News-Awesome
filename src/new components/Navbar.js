import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();
    const [val, setVal] = useState('');
    const handleChange = (ele) => {
        setVal(ele.target.value);
    }
    const input = document.getElementById("myInput");
    // console.log(input)
    (input) ? input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    }) : console.log('null value');
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: 'fixed', top: 0, right: 0, left: 0, zIndex: 111}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{fontSize: '1.7rem'}}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports" onClick={() => {setVal(''); props.getValSub('');}}>Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment" onClick={() => {setVal(''); props.getValSub('');}}>Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/science' ? 'active' : ''}`} to="/science" onClick={() => {setVal(''); props.getValSub(''); }}>Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology" onClick={() => {setVal(''); props.getValSub(''); }}>Technology</Link></li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <input className="form-control me-2" type="search" placeholder="Search" value={val} onChange={handleChange} aria-label="Search" id="myInput" />
                        <button className="btn btn-primary" onClick={() => { props.getValSub(val)}} id='myBtn'>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
