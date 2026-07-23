import { User, Mail, Phone, MapPin, House } from "lucide-react";
import InputField from "./InputField";

export default function ShippingForm({ shippingData, handleChange, errors, }) {
    return (
        <div
            className="bg-white rounded-3xl shadow-lg border border-[#C9B49A] text-right p-8 mt-9"
        >
            <h2
                className="text-3xl font-segoe text-red-900"
            >
                بيانات الشحن
            </h2>

            <p className="text-gray-500 mt-2">
                يرجى إدخال بيانات التوصيل الخاصة بك.
            </p>

            <div className="mt-8 space-y-5">
                <InputField
                    label="الاسم"
                    type="name"
                    name="name"
                    value={shippingData.name}
                    placeholder="ادخل الاسم كامل"
                    onChange={handleChange}
                    error={errors.name}
                    icon={User}
                />

                <InputField
                    label="البريد الالكتروني"
                    type="email"
                    name="email"
                    value={shippingData.email}
                    placeholder="ادخل البريد الالكتروني"
                    onChange={handleChange}
                    error={errors.email}
                    icon={Mail}
                />

                <InputField
                    label="رقم الهاتف"
                    name="phone"
                    value={shippingData.phone}
                    placeholder="01xxxxxxxxx"
                    onChange={handleChange}
                    error={errors.phone}
                    icon={Phone}
                />

                <InputField
                    label="المدينه"
                    name="city"
                    value={shippingData.city}
                    placeholder="ادخل اسم مدينتك"
                    onChange={handleChange}
                    error={errors.city}
                    icon={MapPin}
                />

                <InputField
                    label="العنوان"
                    name="address"
                    value={shippingData.address}
                    placeholder="الشارع، العماره ، الشقه..."
                    onChange={handleChange}
                    error={errors.address}
                    icon={House}
                />
            </div>
        </div>
    );
}
