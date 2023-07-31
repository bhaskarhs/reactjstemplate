import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './Routes.tsx';
import MyContext from './utlis/context/Mycontext.tsx';

const users = { name: "bhaskar" }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyContext.Provider value={users} >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MyContext.Provider>
  </React.StrictMode >,
)
