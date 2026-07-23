import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import OrderCard from "../components/Orders/OrderCard";

export default function Orders() {
    const { orders } = useContext(AdminContext);

    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-red-900">
                    الطلبات
                </h1>

                <p className="text-[#9C8C7B] mt-2">
                    إدارة جميع طلبات العملاء
                </p>
            </div>

            {orders.length === 0 ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-[#E7D8C7]">
                    لا توجد طلبات
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <OrderCard
                            key={order._id}
                            order={order}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}