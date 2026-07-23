import { createContext, useState, useEffect } from "react";
import axios from "axios";

const backendUrl = "http://localhost:4000";
export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
    const [ cartItems, setCartItems ] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [loading ,setLoading]= useState(true);
    const [error,setError]=useState(null);
    const [ token, setToken ] = useState("");

    useEffect(() => {
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${backendUrl}/api/product/list`
            );
            if (response.data.success) {
                setLoading(false);
                setAllProducts(response.data.data);
            }
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

        fetchProducts();
    }, []);

    // ADD TO CART
    const addToCart = async (id) => {
        if (!token) {
            const updatedCart = {
                ...cartItems,
                [id]: (cartItems[id] || 0) + 1,
            };

            setCartItems(updatedCart);

            localStorage.setItem(
                "guestCart",
                JSON.stringify(updatedCart)
            );

            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/cart/add`,
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                setCartItems((prev) => ({
                    ...prev,
                    [id]: (prev[id] || 0) + 1,
                }));
            }

        } catch (err) {
            setError(err.message);
        }
    };

    // REMOVE FROM CART
    const removeFromCart = async (id, removeAll = false) => {
        if (!token) {
            const updated = { ...cartItems };
            if (removeAll || updated[id] === 1) {
                delete updated[id];
            } else {
                updated[id]--;
            }

            setCartItems(updated);

            localStorage.setItem(
                "guestCart",
                JSON.stringify(updated)
            );

            return;
    }
        try {
            if (!token) return;
            const response = await axios.post(
                `${backendUrl}/api/cart/remove`,
                { id, removeAll },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                setCartItems((prev) => {
                    const updated = { ...prev };
                    if (removeAll || updated[id] === 1) {
                        delete updated[id];
                    } else {
                        updated[id]--;
                    }
                    return updated;
                });
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // GET CART
    const getCart = async () => {
    try {
        if (!token) return;
        const response = await axios.get(
            `${backendUrl}/api/cart/get`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.data.success) {
            setCartItems(response.data.cartData);
        }
    } catch (err) {
        setError(err.message);
    }
    };

    // CLEAR CART
    const clearCart = async () => {
        if (!token) {
            localStorage.removeItem("guestCart");
            setCartItems({});
            return;
        }
        try {
            if (!token) {
                setCartItems({});
                return;
            }
            const response = await axios.delete(
                `${backendUrl}/api/cart/clear`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                setCartItems({});
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // GET TOTLAL CART AMOUNT
    const getTotalCartAmount = () => {
    const productsMap = Object.fromEntries(
        allProducts.map(product => [
            product._id,
            product
        ])
    );

    return Object.entries(cartItems).reduce((total, [id, qty]) => {
        const product = productsMap[id];

        return total + (
        product
            ? product.price * qty
            : 0
        );
    }, 0);
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce(
            (total, qty) => total + qty,
            0
        );
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        } else {
            const guestCart =
                JSON.parse(localStorage.getItem("guestCart")) || {};
            setCartItems(guestCart);
        }
    }, []);

    useEffect(() => {
        if (token) {
            getCart();
        }
    }, [token]);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setCartItems({});
    };

    const value = {
        loading,
        backendUrl,
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartAmount,
        getTotalCartItems,
        token,
        setToken,
        logout,
    }

    return(
        <ShopContext.Provider
            value={value}
        >
            { children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

