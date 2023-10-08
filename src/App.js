import React, { useState } from 'react'
import Navbar from './new components/Navbar'
import News from './new components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App(){
  const Api_Key = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState('');
  const [progress, setProgress] = useState(0)
  const getValSub = (val) =>{
    setQuery(val);
    console.log(val)
  }
  const setprogress = (pro)=>{
    setProgress(pro);
  }
    return (
      <div>
        <Router>
        <LoadingBar color='#f11946' progress={progress} height={3}/>
          <Navbar title='News Aweosome' getValSub={getValSub}/>
          <Routes>
            <Route path="/" element={<News setprogress={setprogress} api={Api_Key} key='general' pageSize={10} category='general' country="in" query={query} />} />
            <Route path="/science" element={<News setprogress={setprogress} api={Api_Key} key='science' pageSize={10} category='science' country="in" query={query} />} />
            <Route path="/sports" element={<News setprogress={setprogress} api={Api_Key} key='sports' pageSize={10} category='sports' country="in" query={query} />} />
            <Route path="/entertainment" element={<News setprogress={setprogress} api={Api_Key} key='entertainment' pageSize={10} category='entertainment' country="in" query={query} />} />
            <Route path="/technology" element={<News setprogress={setprogress} api={Api_Key} key='technology' pageSize={10} category='technology' country="in" query={query} />} />
          </Routes>
        </Router>
      </div>
    )
}
