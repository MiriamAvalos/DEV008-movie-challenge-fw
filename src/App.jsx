import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import './App.css';
import Home from "./routes/home";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          
          {/* <Route path="Peliculas" element={<Blogs />} />
          <Route path="Series" element={<Contact />} />
          <Route path="Detalles" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
  

  }

export default App;
