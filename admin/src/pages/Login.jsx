import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"
import { ShieldCheck } from "lucide-react"
import { AdminContext } from "../context/AdminContext"

export default function Login() {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });
    const { backendUrl, setAdminToken } = useContext(AdminContext);
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value, 
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `${backendUrl}/api/admin/login`;
            const { email, password } = formData;
            const response = await axios.post(url, {
                email,
                password,
            })
            
            if(response.data.success) {
                localStorage.setItem("adminToken", response.data.token)
                setAdminToken(response.data.token);
                toast.success("تم تسجيل الدخول")
                setTimeout(() => {
                    navigate("/admin");
                }, 1500);
                setFormData({
                    email: "",
                    password: "",
                })

            } else {
                toast.error(response.data.message)
            }
        } catch (err) {
            console.error(err);
            toast.error("حدث خطأ أثناء تسجيل الدخول.");
        }
    }

    
    return (
        <section 
            className="min-h-screen flex items-center justify-center bg-[#f5f2ef] gap-7 px-6 py-20"
        >
            <div
                className="w-full max-w-md p-8 flex flex-col items-center justify-center bg-white backdrop:blur-xl 
                border-2 border-[#C9B49A] rounded-[40px] overflow-hidden shadow-xl"
            >
                <div
                    className="flex justify-center mb-6"
                >
                    <ShieldCheck size={70} className="text-red-900"/>
                </div>
                <h1
                    className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#5a4f47] to-red-900 p-1 bg-clip-text text-transparent"
                >
                    تسجيل دخول المسؤول
                </h1>
                
                <p
                    className="text-center text-[#5a4f47] text-sm mb-8"
                >
                    قم بتسجيل الدخول لإدارة المتجر
                </p>
                <form 
                    onSubmit={handleSubmit}
                    className="space-y-5 mt-6"
                >
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        autoComplete="email"
                        placeholder= "البريد الألكتروني"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none text-right 
                            placeholder:text-gray-400 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        autoComplete="current-password"
                        placeholder= "الباسورد"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none text-right 
                            placeholder:text-gray-400 focus:border-red-900 focus:ring-2 focus:ring-red-900/20 transition"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#5a4f47] to-red-900 text-[#F8F4EF] rounded-2xl py-4 
                            cursor-pointer hover:shadow-xl hover:scale-[1.02] font-bold transition duration-300"
                    > 
                        تسجيل الدخول
                    </button>
                </form>
            </div>
        </section>
    )
    }
