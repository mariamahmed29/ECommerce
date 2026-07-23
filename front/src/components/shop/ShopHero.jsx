import { Link } from "react-router-dom";

export default function ShopHero() {
    return (
        <section className="relative w-full h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-[#EDE3D8]/60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-[#9B7B60] text-sm md:text-base font-tajawal">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-red-900 transition-colors"
                            >
                                الرئيسية
                            </Link>
                        </li>

                        <li>/</li>

                        <li
                            aria-current="page"
                            className="text-red-900"
                        >
                            تسوق
                        </li>
                    </ol>
                </nav>

                <h1
                    className="mt-4 text-red-900 font-amiri text-5xl md:text-7xl"
                >
                    تسوق
                </h1>

                <span
                    className="w-24 h-[2px] bg-[#C9B49A] my-5"
                />

                <p
                    className="text-[#6B5B4F] text-base md:text-lg font-tajawal"
                >
                    اختر ما يناسب ذوقك من أحدث مجموعاتنا
                </p>
            </div>
        </section>
    );
}