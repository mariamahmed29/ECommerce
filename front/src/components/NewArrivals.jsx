import { useState, useContext } from "react";
import { categories, emptyMessages } from "../data/data";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./shop/ProductCard";

export default function NewArrivals() {
    const { allProducts } = useContext(ShopContext);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const newProducts = allProducts
        .filter((product) => product.isNewProduct)
        .sort(
            (a, b) =>
                new Date(b.createdAt) - new Date(a.createdAt)
        );

    const filteredProducts =
        selectedCategory === "all"
            ? newProducts
            : newProducts.filter(
                (product) =>
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-amiri text-red-900">
                    أحدث المنتجات
                </h2>

                <p className="mt-3 text-[#6B5C53]">
                    اكتشفي أحدث الإضافات في متجرنا
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                            selectedCategory === cat.value
                                ? "bg-red-900 text-white border-red-900"
                                : "bg-white border-[#C9B49A] text-red-900 hover:bg-red-900 hover:text-white"
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                    <div className="py-20 text-center border border-dashed border-[#D8C6B2] rounded-3xl bg-[#FCFAF7]">
                        <h3 className="text-3xl font-amiri text-red-900">
                            {emptyMessages[selectedCategory]}
                        </h3>

                        <p className="mt-3 text-[#6B5C53]">
                            سيتم إضافة منتجات جديدة قريبًا.
                        </p>
                    </div>
            )}
        </section>
    );
}