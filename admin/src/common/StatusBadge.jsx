export default function StatusBadge({ status }) {
    const statusStyles = {
        "تم التسليم": "bg-green-100 text-green-700",
        "قيد التجهيز": "bg-yellow-100 text-yellow-700",
        "قيد الشحن": "bg-blue-100 text-blue-700",
        "ملغي": "bg-red-100 text-red-700",
    };

    return (
        <span
            className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${statusStyles[status] || "bg-gray-100 text-gray-600"}
            `}
        >
            {status}
        </span>
    );
}