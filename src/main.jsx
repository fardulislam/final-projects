import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { router } from './routes/router.jsx'
import { RouterProvider } from 'react-router/dom'
import Authprovaider from './Coontext/Authcontext/Authprovaider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovaider>
      <RouterProvider router={router} />
    </Authprovaider>
  </StrictMode>,
)
