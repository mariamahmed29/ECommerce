import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// Components


// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";
import AdminLayout from "./layouts/AdminLayout";


function App() {

  return (
    <div
      dir="rtl"
    >
      <>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/edit/:id" element={<EditProduct />} />
              <Route path="orders" element={<Orders />} />
          </Route>
          
      </Routes>
      </>
    </div>

  )
}

export default App
