import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CartItem({ item }) {
    const { backendUrl } = useContext(ShopContext);

    return (
        <div className="flex items-center gap-4 rounded-2xl border border-[#C9B49A] bg-white shadow-sm p-8 mt-9">
            <img
                src={`${backendUrl}/images/${item.image}`}
                alt={item.name}
                className="w-24 h-24 rounded-xl object-cover"
            />

            <div className="flex-1 text-right">
                <h3 className="font-bold text-lg text-red-900">
                    {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                    {item.price} $ × {item.quantity}
                </p>

                <p className="font-bold text-red-900 mt-2">
                    الإجمالي: {item.price * item.quantity} $
                </p>
            </div>
        </div>
    );
}
