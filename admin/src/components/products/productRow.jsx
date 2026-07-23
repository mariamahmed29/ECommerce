import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

export default function ProductRow({ product }) {
    const { backendUrl, removeProduct, } = useContext(AdminContext);
    const [showdeleteModal, setShowdeleteModal] = useState(false);

    return (
        <tr className="border-b border-[#F3E9DD] hover:bg-[#FCFAF7] transition">
            <td className="px-6 py-4">
                <img
                    src={`${backendUrl}/images/${product.image}`}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[#F3E9DD]"
                />
            </td>
            

            <td className="px-6 py-4 font-semibold text-[#5A4F47]">
                {product.name}
            </td>

            <td className="px-6 py-4">
                {product.category}
            </td>

            <td className="px-6 py-4">
                {product.price}$
            </td>

            <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                    <Link
                        to={`/admin/products/edit/${product._id}`}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                    >
                        <Pencil size={18} />
                    </Link>

                    <button
                        onClick={() => setShowdeleteModal(true)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </td>


            {showdeleteModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
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
                                    removeProduct(product._id);
                                    setShowdeleteModal(false);
                                }}
                                className="flex-1 bg-red-900 text-white py-3 rounded-xl"
                            >
                                نعم
                            </button>

                            <button
                                onClick={() => setShowdeleteModal(false)}
                                className="flex-1 border border-[#C9B49A] py-3 rounded-xl"
                            >
                                إلغاء
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </tr>
    );
}