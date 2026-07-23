import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import pajamasImg from "../assets/pajamas/pajamas_1.jpg";
import cashatImg from "../assets/cashat/cashat_1.jpg";
import pantsImg from "../assets/pants/pants_1.jpg";

const cardsData = [
    {
        id: 1,
        image: pajamasImg,
        title: "بيجامات",
        category: "pajamas",
    },
    {
        id: 2,
        image: cashatImg,
        title: "كاشات",
        category: "cashat",
    },
    {
        id: 3,
        image: pantsImg,
        title: "بناطيل",
        category: "pants",
    },
];

export default function CategoriesCard() {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <span
                        aria-hidden="true"
                        className="flex-1 h-[0.5px] bg-[#C9B49A] max-w-[80px] md:max-w-[160px]"
                    />

                    <h2 className="tracking-widest text-red-900 font-segoe text-xl">
                        تسوق حسب الفئة
                    </h2>

                    <span
                        aria-hidden="true"
                        className="flex-1 h-[0.5px] bg-[#C9B49A] max-w-[80px] md:max-w-[160px]"
                    />
                </div>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Link
                        to="/shop"
                        className="group flex flex-col items-center justify-center gap-3 shrink-0"
                    >
                        <div
                            className="w-24 h-24 rounded-full border border-[#C9B49A] bg-[#F5F2EF] flex items-center justify-center transition-all duration-300 group-hover:border-red-900"
                        >
                            <ChevronRight
                                className="w-8 h-8 text-[#C9B49A] transition-all duration-300 group-hover:text-red-900 group-hover:translate-x-1"
                            />
                        </div>

                        <span
                            className="text-red-900 text-lg font-semibold transition-all duration-300"
                        >
                            عرض الكل
                        </span>

                        <span className="w-12 h-[2px] bg-[#C9B49A] rounded-full"></span>
                    </Link>
                    {cardsData.map(({ id, image, title, category }) => (
                        <Link
                            key={id}
                            to={`/shop?category=${category}`}
                            aria-label={`عرض منتجات ${title}`}
                            className="group relative border border-[#C9B49A] rounded-[30px] p-6 shadow-lg bg-white
                                flex flex-col items-center gap-4 transition-all duration-500
                                hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />

                            <h3 className="text-red-900 text-lg font-semibold">
                                {title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}