import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(

  <HashRouter>
   <StoreContextProvider>
      <App/>
    </StoreContextProvider> 
  </HashRouter>
)