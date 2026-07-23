import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import './index.css'

import AdminContextProvider from "./context/AdminContext"


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <AdminContextProvider>
        <App />
    </AdminContextProvider>
  </BrowserRouter>
)
