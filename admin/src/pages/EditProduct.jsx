import { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { editProduct, getSingleProduct } from "../services/productService";

export default function EditProduct() {
    const { backendUrl, adminToken, fetchProducts } = useContext(AdminContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const fetchProduct = async () => {
        try {
            const response = await getSingleProduct(
                backendUrl,
                id
            );

            if (response.data.success) {
                const product = response.data.data;

                setName(product.name);
                setDescription(product.description);
                setPrice(product.price);
                setCategory(product.category);
                setImage(
                    `${backendUrl}/images/${product.image}`
                );

            } else {
                toast.error(response.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);

        const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", Number(price));
            formData.append("category", category);

            if (image instanceof File) {
                formData.append("image", image);
            }

            const response = await editProduct(
                backendUrl,
                adminToken,
                formData
            );

            if (response.data.success) {
                toast.success("تم تعديل المنتج");
                await fetchProducts();
                navigate("/admin/products");

            } else {
                toast.error(response.data.message);
            }

        } catch (err) {
            console.error(err);
            toast.error("حدث خطأ أثناء تعديل المنتج");
        }
    };

    return (
        <ProductForm
            image={image}
            setImage={setImage}

            name={name}
            setName={setName}

            description={description}
            setDescription={setDescription}

            price={price}
            setPrice={setPrice}

            category={category}
            setCategory={setCategory}

            onSubmit={handleSubmit}

            title="تعديل المنتج"

            subtitle="عدّل بيانات المنتج."

            buttonText="حفظ التعديلات"
        />
    )
}
