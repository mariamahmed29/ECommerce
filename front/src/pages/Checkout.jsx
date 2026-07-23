import { useState } from "react";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderSummary from "../components/checkout/OrderSummary";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Checkout() {
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const {
        cartItems,
        allProducts,
        getTotalCartAmount,
        backendUrl,
        token,
        clearCart,
    } = useContext(ShopContext);

    const orderItems = Object.entries(cartItems).map(([id, quantity]) => {
        const product = allProducts.find((p) => p._id === id);

        return {
            ...product,
            quantity,
        };
    });

    const subtotal = getTotalCartAmount();
    const shippingCost = 50;
    const discount = 0;
    const total = subtotal + shippingCost - discount;

    const [shippingData, setShippingData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        address: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setShippingData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!shippingData.email.trim())
            newErrors.email = "البريد الإلكتروني مطلوب";

        if (!shippingData.phone.trim())
            newErrors.phone = "رقم الهاتف مطلوب";

        if (!shippingData.city.trim())
            newErrors.city = "المدينة مطلوبة";

        if (!shippingData.address.trim())
            newErrors.address = "العنوان مطلوب";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleConfirmOrder = async () => {
        if (!validateForm()) return;

        try {

            const orderData = {
                items: orderItems,
                amount: getTotalCartAmount(),
                address: shippingData,
                paymentMethod,
            };

            const response = await axios.post(
                `${backendUrl}/api/order/place`,
                orderData,
                {
                headers: token
                    ? {
                        Authorization: `Bearer ${token}`,
                        }
                    : {},
                }
            );

            if (response.data.success) {
                if (paymentMethod === "stripe") {
                    window.location.replace(
                        response.data.session_url
                    );
                } else {
                await clearCart();
                navigate("/verify", {
                    state: {
                        isCOD: true,
                    },
                });
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            console.log(err);
            toast.error("حدث خطأ أثناء إرسال الطلب");
        }
    };

    return (
        <section
        className="min-h-screen bg-[#F5EFE8] py-24 px-6"
        >
            <h1
            className="text-5xl font-bold text-red-900 font-amiri text-center"
            >
                اتمام الطلب
            </h1>

            <div className="grid lg:grid-cols-2 gap-10">

                <div>
                    <ShippingForm
                        shippingData={shippingData}
                        handleChange={handleChange}
                        errors={errors}
                    />
                    <PaymentMethod
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />
                </div>

                <OrderSummary
                    orderItems={orderItems}
                    subtotal={subtotal}
                    shippingCost={shippingCost}
                    discount={discount}
                    total={total}
                    handleConfirmOrder={handleConfirmOrder}
                />
            </div>
        </section>
    )
}

























