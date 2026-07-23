import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getProducts, deleteProduct } from "../services/productService";
import { getOrders, updateOrderStatus } from "../services/orderService";
import { useNavigate } from "react-router-dom";


export const AdminContext = createContext();

const backendUrl = "http://localhost:4000";

export default function AdminContextProvider({ children }) {
    const navigate = useNavigate();

    const [adminToken, setAdminToken] = useState("");
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedToken = localStorage.getItem("adminToken");

        if (savedToken) {
            setAdminToken(savedToken);
        }
    }, []);

    // GET PRODUCT 
    const fetchProducts = async () => {
        try {
            const response = await getProducts(backendUrl);

            if (response.data.success) {
                setProducts(response.data.data);
            }

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // DELETE PRODUCT
    const removeProduct = async (productId) => {  
        try {
            const response = await deleteProduct(
                backendUrl,
                adminToken,
                productId
            );

            if(response.data.success) {
                await fetchProducts();
                toast.success("تم حذف المنتج");

            } else {
                toast.error(response.data.message)
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    // GET ORDERS
    const fetchOrders = async () => {
        try {
            const response = await getOrders(
                backendUrl,
                adminToken
            );

            if (response.data.success) {
                setOrders(response.data.data);
            }

        } catch (err) {
            console.log(err);
        }
    };

    const changeOrderStatus = async (orderId, status) => {
        try {
            const response = await updateOrderStatus(
                backendUrl,
                adminToken,
                orderId,
                status
            );

            if (response.data.success) {
                fetchOrders();
            }

        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        if (adminToken) {
            fetchProducts();
            fetchOrders();
        }
    }, [adminToken]);

    const logout = () => {
        localStorage.removeItem("adminToken");
        setAdminToken("");
        navigate("/");
    };

    const value = {
        backendUrl,
        adminToken,
        setAdminToken,
        products,
        fetchProducts,
        removeProduct,
        orders,
        fetchOrders,
        changeOrderStatus,
        logout,
    };

    return (
        <AdminContext.Provider
            value={value}
        >
            {children}
        </AdminContext.Provider>
    );
}