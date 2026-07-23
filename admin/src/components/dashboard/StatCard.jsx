export default function StatCard({
    title,
    value,
    icon,
    color,
    change,
}) {
    const Icon = icon;

    return (
        <div
            className="bg-white border border-[#E7D8C7] rounded-3xl
            p-4 sm:p-6
            shadow-sm hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 w-full"
        >
            <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div
                    style={{ backgroundColor: color }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <span className="text-xs sm:text-sm font-medium text-green-600 text-left">
                    {change}
                </span>
            </div>

            <div className="space-y-1 sm:space-y-2">
                <h3 className="text-[#7B6F6C] text-xs sm:text-sm font-medium break-words">
                    {title}
                </h3>

                <p className="text-2xl sm:text-3xl font-bold text-[#5A4F47] break-words">
                    {value}
                </p>
            </div>
        </div>
    );
}