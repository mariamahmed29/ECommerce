import { Menu, LogOut, X } from "lucide-react";
import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
    const { logout } = useContext(AdminContext);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <header
            className="flex items-center justify-between h-[70px] bg-white border-b border-[#C9B49A] shadow-sm px-4 md:px-8 select-none"
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                    className="md:hidden p-3 rounded-xl hover:bg-[#F8F4EF] transition cursor-pointer z-50"
                >
                    {isSidebarOpen ? (
                        <X className="w-6 h-6 text-[#5A4F47]" />
                    ) : (
                        <Menu className="w-6 h-6 text-[#5A4F47]" />
                    )}
                </button>

                <div className="hidden md:flex flex-col leading-4 bg-[#F8F4EF] border border-[#E7D8C7] rounded-2xl px-4 py-2">
                    <h3 className="text-sm font-semibold text-[#5A4F47]">
                        مريم
                    </h3>

                    <span className="text-xs text-gray-500">
                        المسؤول
                    </span>
                </div>
            </div>

            <h1 className="text-red-900 font-great-vibes text-4xl md:text-5xl tracking-wide">
                A&2M
            </h1>

            <button
                onClick={() => setShowLogoutModal(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl 
                    text-red-900 hover:bg-red-50 transition cursor-pointer font-medium"
            >
                <LogOut className="w-5 h-5" />
                تسجيل الخروج
            </button>


            {showLogoutModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-90">
                    <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-xl">
                        <h2 className="text-2xl font-bold text-red-900 text-center">
                            تسجيل الخروج
                        </h2>

                        <p className="text-center text-gray-600 mt-4">
                            هل أنت متأكد أنك تريد تسجيل الخروج؟
                        </p>

                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={() => {
                                    logout();
                                    setShowLogoutModal(false);
                                }}
                                className="flex-1 bg-red-900 text-white py-3 rounded-xl
                                    hover:bg-red-800 transition cursor-pointer"
                            >
                                نعم
                            </button>

                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="flex-1 border border-[#C9B49A] py-3 rounded-xl
                                    hover:border-red-900 hover:text-red-900 transition cursor-pointer"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}