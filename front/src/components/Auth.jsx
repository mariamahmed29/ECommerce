import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, UserPlus } from "lucide-react";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Auth() {
    const { backendUrl, setToken } = useContext(ShopContext);
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        general: "",
    });

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
            general: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        let newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            general: "",
        };

        if (!isLogin) {
            if (!formData.name.trim()) {
                newErrors.name = "الاسم مطلوب";
            }

            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = "البريد الإلكتروني مطلوب";
        }

        if (!formData.password.trim()) {
            newErrors.password = "كلمة المرور مطلوبة";
        }

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
        }

        if (formData.password && formData.password.length < 8) {
            newErrors.password = "يجب ألا تقل كلمة المرور عن 8 أحرف";
        }

        if (
            newErrors.name ||
            newErrors.email ||
            newErrors.password ||
            newErrors.confirmPassword
        ) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const url = isLogin
                ? `${backendUrl}/api/user/login`
                : `${backendUrl}/api/user/register`;

            const response = await axios.post(url, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                setToken(response.data.token);
                navigate("/");
            } else {
                setErrors((prev) => ({
                    ...prev,
                    general: response.data.message,
                }));
            }
        } catch (err) {
            console.error(err);

            setErrors((prev) => ({
                ...prev,
                general: "حدث خطأ، حاول مرة أخرى.",
            }));
        } finally {
            setLoading(false);
        }
    } 
    
    const changeMode = () => {
        setIsLogin(!isLogin);

        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        setErrors({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            general: "",
        });
    };
        
    return (
        <section className="min-h-screen bg-[#F8F4EF] flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-xl border border-[#C9B49A]">

                {/* Left */}
                <div className="hidden lg:flex bg-red-900 items-center justify-center">
                    <div className="text-center text-white p-14">
                        <h1 className="text-6xl font-amiri font-bold">
                            A&2M
                        </h1>

                        <div className="w-24 h-[2px] bg-[#D8C4B0] mx-auto my-8"></div>

                        <h2 className="text-3xl font-bold">

                            {isLogin
                                ? "مرحباً بعودتك"
                                : "انضمي إلينا"}
                        </h2>

                        <p className="mt-6 leading-8 text-red-100">
                            {isLogin
                                ? "سجلي الدخول للوصول إلى حسابك ومتابعة طلباتك."
                                : "أنشئي حساباً جديداً واستمتعي بتجربة تسوق مميزة."}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="p-10 sm:p-14">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-[#F5EFE8] border border-[#C9B49A] flex items-center justify-center">
                            {isLogin ?
                                <UserRound className="w-10 h-10 text-red-900"/>
                                :
                                <UserPlus className="w-10 h-10 text-red-900"/>
                            }
                        </div>
                    </div>

                    <h2 className="text-center text-4xl font-amiri text-red-900">
                        {isLogin
                            ? "تسجيل الدخول"
                            : "إنشاء حساب"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 mt-10"
                    >
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    placeholder="أدخل اسمك الكامل"
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none
                                        focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1 mr-2">
                                        {errors.name}
                                    </p>
                                )}
                            </>
                        )}

                        <>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="أدخل بريدك الإلكتروني"
                                onChange={handleChange}
                                className="w-full p-4 rounded-2xl border border-[#C9B49A]
                                    focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                            />

                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1 mr-2">
                                    {errors.email}
                                </p>
                            )}
                        </>

                        <>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="أدخل كلمة المرور"
                                onChange={handleChange}
                                className="w-full p-4 rounded-2xl border border-[#C9B49A]
                                    focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                            />

                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1 mr-2">
                                    {errors.password}
                                </p>
                            )}
                        </>

                        {!isLogin && (
                            <>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    placeholder="تأكيد كلمة المرور"
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-2xl border border-[#C9B49A]
                                        focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                                />

                                {errors.confirmPassword && (
                                    <p className="text-red-600 text-sm mt-1 mr-2">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full rounded-2xl py-4 font-bold transition
                                ${
                                    loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-red-900 hover:bg-red-950 text-white"
                                }`}
                        >
                            {loading
                                ? "جارٍ التحميل..."
                                : isLogin
                                    ? "تسجيل الدخول"
                                    : "إنشاء الحساب"}
                        </button>

                        {errors.general && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mt-4">
                                <p className="text-red-700 text-sm text-center">
                                    {errors.general}
                                </p>
                            </div>
                        )}
                    </form>

                    <p className="mt-8 text-center">
                        {isLogin
                            ? "ليس لديك حساب؟"
                            : "لديك حساب بالفعل؟"}

                        <span
                            onClick={changeMode}
                            className="text-red-900 cursor-pointer mr-2 font-semibold hover:underline"
                        >
                            {isLogin
                                ? "إنشاء حساب"
                                : "تسجيل الدخول"}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}