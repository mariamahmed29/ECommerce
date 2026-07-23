import { useContext, useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { ShopContext } from "../../context/ShopContext";

export default function ProductCard({ product }) {
    const { addToCart, backendUrl } = useContext(ShopContext);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 50);

        return () => clearTimeout(timer);
    }, [product]);

    return (
        <div
            className={`group relative overflow-hidden rounded-3xl border border-[#C9B49A] bg-white 
                    shadow-md hover:shadow-xl transition-all duration-500
                ${
                    visible
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                }
            `}
        >
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={`${backendUrl}/images/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {product.isNewProduct && (
                    <span className="absolute top-3 right-3 z-20 bg-red-900 text-white text-xs px-3 py-1 rounded-full">
                        جديد
                    </span>
                )}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0
                        md:group-hover:opacity-100 transition-all duration-500
                    "
                />

                <div
                    className="absolute bottom-20 left-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"
                >
                    <h3 className="text-white text-lg font-bold leading-snug drop-shadow">
                        {product.name}
                    </h3>
                </div>

                <div
                    className=" absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-100 
                        md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"
                >
                    <div className="bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow">
                        <span className="text-red-900 font-bold">
                            {product.price}$
                        </span>
                    </div>

                    <button 
                        onClick={() => addToCart(product._id)} 
                        className="flex items-center gap-2 bg-red-900 hover:bg-red-950 text-white px-5 py-3 rounded-full 
                            shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer" 
                    > 
                        <ShoppingBag size={18} /> 
                        <span className="hidden sm:block"> أضف للسلة </span> 
                    </button>
                </div>
            </div>
        </div>
    );
}