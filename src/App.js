import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import './App.css';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;