import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActionCard({
    title,
    icon,
    color,
    to,
}) {
    const Icon = icon;

    return (
        <Link
            to={to}
            className="group bg-white border border-[#E7D8C7] rounded-3xl
            p-4 sm:p-6
            shadow-sm hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 flex flex-col gap-4 sm:gap-5
            cursor-pointer w-full"
        >
            <div
                style={{
                    backgroundColor: `${color}20`,
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            >
                <Icon
                    size={24}
                    className="sm:w-7 sm:h-7"
                    style={{ color }}
                />
            </div>

            <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#5A4F47] break-words">
                    {title}
                </h3>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-fit border-2 border-[#E7D8C7] p-3 rounded-2xl">
                <p className="text-xs sm:text-sm text-gray-500">
                    اضغط للانتقال
                </p>

                <ArrowLeft
                    style={{ color }}
                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 flex-shrink-0"
                />
            </div>
        </Link>
    );
}