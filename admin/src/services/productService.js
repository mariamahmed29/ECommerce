import axios from "axios";

// ------------ Get Products ------------ 
export const getProducts = async (backendUrl) => {
    return await axios.get(`${backendUrl}/api/product/list`);
};

// ------------ Get Single Product ------------ 
export const getSingleProduct = async (backendUrl, id) => {
    return await axios.get(
        `${backendUrl}/api/product/single/${id}`
    );
};

// ------------ Add Product ------------ 
export const addProduct = async (backendUrl, adminToken, formData) => {
    return await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
            headers: {
                Authorization:` Bearer ${adminToken}`,
            },
        }
    );
};

// ------------ Edite Product ------------ 
export const editProduct = async (backendUrl, adminToken, formData) =>{
    return await axios.post(
        `${backendUrl}/api/product/update`,
        formData,
        {
            headers: {
                Authorization: ` Bearer ${adminToken}`,
            }
        }
    );
}

// ------------ Delete Product ------------ 
export const deleteProduct = async (backendUrl, adminToken, productId) => {
    return await axios.post(
        `${backendUrl}/api/product/remove`,
        {
            id: productId,
        },
        {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        }
    );
};

