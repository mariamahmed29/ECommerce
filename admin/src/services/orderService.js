import axios from "axios";

export const getOrders = async (backendUrl, adminToken) => {
    return await axios.get(
        `${backendUrl}/api/order/list`,
        {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        }
    );
};

export const updateOrderStatus = async (backendUrl, adminToken, orderId, status) => {
    return await axios.put(
        `${backendUrl}/api/order/update`,
        {
            orderId,
            status,
        },
        {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        }
    );
};