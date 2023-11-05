import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Login from './components/Login';
import FirstPage from './components/FirstPage';
import Main from "./components/Main";
import Join from "./components/Join";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/main"} element={<Main />} />
        <Route path={"/join"} element={<Join />} />
        <Route path={"/post"} element={<Post />} />
    </Routes>
  </Router>
  );
}

export default App;
