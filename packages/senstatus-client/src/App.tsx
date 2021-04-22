import React from 'react'
import SideNav from './components/layouts/SideNav';
import Content from './components/layouts/Content';
import Routes from './routes';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <SideNav >
          <Routes />
        </SideNav>
      </div>
    </Router>
  );
}

export default App;
