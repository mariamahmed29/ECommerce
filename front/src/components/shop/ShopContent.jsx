import { useState, useEffect, useContext } from "react";
import { categories, emptyMessages } from "../../data/data";
import { ShopContext } from "../../context/ShopContext";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export default function ShopContent() {
    const { allProducts } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const categoryFromUrl =
        searchParams.get("category") || "all";

    const [selectedCategory, setSelectedCategory] =
        useState(categoryFromUrl);

    useEffect(() => {
        setSelectedCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    const filteredProducts =
        selectedCategory === "all"
            ? allProducts
            : allProducts.filter(
                (product) =>
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col items-center justify-between gap-8">
                <div className="flex flex-col items-center justify-center w-full bg-white border border-[#C9B49A] rounded-2xl shadow-sm p-6">
                    <h3 className="text-xl font-amiri text-red-900">
                        الفئات
                    </h3>

                    <span className="block w-16 h-[2px] bg-[#C9B49A] my-3"></span>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                                    selectedCategory === cat.value
                                        ? "bg-red-900 text-white border-red-900"
                                        : "bg-white text-red-900 border-[#C9B49A] hover:bg-red-900 hover:text-white"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </main>
                ) : (
                    <div className="w-full min-h-[600px] border border-dashed border-[#C9B49A] rounded-2xl bg-[#FCFAF7] flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-amiri text-red-900">
                            {emptyMessages[selectedCategory]}
                        </h2>

                        <p className="mt-3 text-[#6B5C53]">
                            سيتم إضافة منتجات جديدة قريبًا.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}