import './App.css';
import {Route,Routes } from "react-router-dom";
import Login from './pages/Login';
import MainPage from './component/MainPage';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/home/*" element={<MainPage />} />
       <Route path="/" element={<Login />} />
       </Routes>

    </div>
  );
}

export default App;
