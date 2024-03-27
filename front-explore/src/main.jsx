import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Balance from './componentes/Balance'
import Bloque from './componentes/Bloque'
import Home from './componentes/Home'
import Tx from './componentes/Tx'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='/balance/:address' element={<Balance />} />
        <Route path='/tx/:tx' element={<Tx />} />
        <Route path='/bloque/:bloque' element={<Bloque />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
)
