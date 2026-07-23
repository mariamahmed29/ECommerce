import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

export default function RecentOrders() {
    const { orders } = useContext(AdminContext);
    const navigate = useNavigate();

    return (
        <div className="mt-10 bg-white border border-[#E7D8C7] rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-[#F0E4D7]">
                <h2 className="text-lg sm:text-xl font-bold text-[#5A4F47]">
                    آخر الطلبات
                </h2>

                <button
                    onClick={() => navigate("/admin/orders")}
                    className="text-xs sm:text-sm text-red-900 hover:text-red-700 transition cursor-pointer whitespace-nowrap"
                >
                    عرض الكل
                </button>
            </div>

            {orders.length === 0 ? (
                <div className="py-16 text-center text-gray-500 text-sm sm:text-base">
                    لا توجد طلبات حتى الآن
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                        <thead className="bg-[#FAF7F2]">
                            <tr className="text-[#5A4F47] text-xs sm:text-sm">
                                <th className="px-4 sm:px-6 py-4 text-right">
                                    رقم الطلب
                                </th>

                                <th className="px-4 sm:px-6 py-4 text-right">
                                    العميل
                                </th>

                                <th className="px-4 sm:px-6 py-4 text-right">
                                    الإجمالي
                                </th>

                                <th className="px-4 sm:px-6 py-4 text-right">
                                    الحالة
                                </th>

                                <th className="px-4 sm:px-6 py-4 text-right">
                                    التاريخ
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b last:border-0 border-[#F3E9DD] hover:bg-[#FCFAF7] transition"
                                >
                                    <td className="px-4 sm:px-6 py-4 font-semibold text-red-900 whitespace-nowrap">
                                        #{order._id.slice(-6)}
                                    </td>

                                    <td className="px-4 sm:px-6 py-4 text-[#5A4F47] whitespace-nowrap">
                                        {order.address?.name || "غير متوفر"}
                                    </td>

                                    <td className="px-4 sm:px-6 py-4 font-medium text-[#5A4F47] whitespace-nowrap">
                                        ${order.amount}
                                    </td>

                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                order.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : order.status === "on the way"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >
                                            {order.status === "pending"
                                                ? "قيد الانتظار"
                                                : order.status === "on the way"
                                                ? "في الطريق"
                                                : "تم التوصيل"}
                                        </span>
                                    </td>

                                    <td className="px-4 sm:px-6 py-4 text-gray-500 whitespace-nowrap">
                                        {new Date(order.createdAt).toLocaleDateString(
                                            "ar-EG"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}