import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Login from './components/Login';
import FirstPage from './components/FirstPage.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        <Route path={"/login"} element={<Login />} />
      {/* 다른 라우트 설정도 가능 */}
    </Routes>
  </Router>
  );
}

export default App;
