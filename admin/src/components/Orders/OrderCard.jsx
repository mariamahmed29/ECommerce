import { Package } from "lucide-react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

export default function OrderCard({ order }) {
    const { changeOrderStatus } = useContext(AdminContext);

    const statusText = {
        pending: "قيد المراجعة",
        "on the way": "في الطريق",
        delivered: "تم التسليم",
    };

    return (
        <div className="bg-white rounded-3xl border border-[#E7D8C7] shadow-sm p-7 space-y-6 hover:shadow-md transition">
            <div className="flex justify-between items-center border-b border-[#F3E9DD] pb-4">
                <div className="flex items-center gap-3">
                    <Package className="text-red-900" size={28} />

                    <div>
                        <h2 className="font-bold text-xl text-[#554b42]">
                            طلب #{order._id.slice(-6)}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {new Date(order.createdAt).toLocaleString("ar-EG")}
                        </p>
                    </div>
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "on the way"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                    }`}
                >
                    {statusText[order.status]}
                </span>
            </div>

            <div>
                <h3 className="font-semibold mb-3 text-red-900">
                    المنتجات
                </h3>

                <div className="space-y-2">
                    {order.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b border-gray-100 pb-2"
                        >
                            <span className="text-gray-700">
                                {item.name}
                            </span>

                            <span className="font-semibold text-[#554b42]">
                                {item.quantity} ×
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-3 text-sm text-gray-500">
                    عدد المنتجات : {order.items.length}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold mb-3 text-red-900">
                        بيانات العميل
                    </h3>

                    <div className="space-y-2 text-gray-700">
                        <p>
                            {order.address.email}
                        </p>

                        <p>
                            {order.address.phone}
                        </p>

                        <p>
                            {order.address.city}
                        </p>

                        <p>
                            {order.address.address}
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-3 text-red-900">
                        معلومات الدفع
                    </h3>

                    <div className="space-y-3">
                        <p className="text-gray-700">
                            <span className="font-semibold text-red-900">
                                الطريقة :
                            </span>
                            {" "}
                            {order.paymentMethod === "cod"
                                ? "الدفع عند الاستلام"
                                : "Stripe"}
                        </p>

                        <div>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                    order.payment
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {order.payment
                                    ? "تم الدفع"
                                    : "غير مدفوع"}
                            </span>
                        </div>

                        <p className="text-lg font-bold text-red-900">
                            {order.amount}$
                        </p>
                    </div>
                </div>

            </div>

            <div className="border-t border-[#F3E9DD] pt-5 flex items-center gap-4">
                <span className="font-semibold text-[#554b42]">
                    تغيير الحالة :
                </span>

                <select
                    value={order.status}
                    onChange={(e) =>
                        changeOrderStatus(
                            order._id,
                            e.target.value
                        )
                    }
                    className="border border-[#E7D8C7] rounded-xl px-4 py-2 bg-white outline-none focus:border-red-900 cursor-pointer"
                >
                    <option value="pending">
                        قيد المراجعة
                    </option>

                    <option value="on the way">
                        في الطريق
                    </option>

                    <option value="delivered">
                        تم التسليم
                    </option>
                </select>
            </div>
        </div>
    );
}