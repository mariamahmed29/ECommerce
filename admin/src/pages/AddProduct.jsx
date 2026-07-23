import { useState } from "react";
import ProductForm from "../components/ProductForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { addProduct } from "../services/productService";


export default function AddProduct() {
    const { backendUrl, adminToken, fetchProducts } = useContext(AdminContext);
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image || !name || !price || !category) {
            return toast.error("من فضلك املئ جميع البيانات");
        }


        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            formData.append("price", Number(price));
            formData.append("category", category);

            const response = await addProduct(
                backendUrl,
                adminToken,
                formData
            );

            if (response.data.success) {
                toast.success("تم إضافة المنتج");

                setImage(null);
                setName("");
                setPrice("");
                setCategory("");

                await fetchProducts();
                
                navigate("/admin/products");
            } else {
                toast.error(response.data.message);
            }

        } catch (err) {
            console.error(err);
            toast.error("حدث خطأ أثناء إضافة المنتج");
        }
    };

    return (
        <ProductForm
            image={image}
            setImage={setImage}

            name={name}
            setName={setName}

            price={price}
            setPrice={setPrice}

            category={category}
            setCategory={setCategory}

            onSubmit={handleSubmit}

            title="إضافة منتج"

            subtitle="أضف منتجًا جديدًا إلى المتجر."

            buttonText="إضافة المنتج"
        />
    );
}