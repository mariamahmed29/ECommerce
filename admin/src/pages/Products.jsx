import { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { AdminContext } from "../context/AdminContext";
import ProductTable from "../components/products/ProductTable";

export default function Products() {
    const { products } = useContext(AdminContext);

    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#5A4F47]">
                        المنتجات
                    </h1>

                    <p className="text-[#9C8C7B] mt-2">
                        إدارة جميع منتجات المتجر.
                    </p>
                </div>

                <Link
                    to="/admin/products/add"
                    className="flex items-center gap-2 bg-red-900 text-white px-5 py-3 rounded-2xl hover:bg-red-800 transition"
                >
                    <Plus size={20} />
                    إضافة منتج
                </Link>
            </div>

            <ProductTable products={products} />
        </section>
    );
}