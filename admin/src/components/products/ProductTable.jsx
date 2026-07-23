import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
    return (
        <div className="bg-white rounded-3xl border border-[#E7D8C7] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                    <thead className="bg-[#F8F4EF]">
                        <tr className="text-[#5A4F47] text-sm">
                            <th className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                                الصورة
                            </th>

                            <th className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                                الاسم
                            </th>

                            <th className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                                الفئة
                            </th>

                            <th className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                                السعر
                            </th>

                            <th className="px-4 sm:px-6 py-4 text-center whitespace-nowrap">
                                العمليات
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <ProductRow
                                    key={product._id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="py-12 text-center text-gray-500"
                                >
                                    لا يوجد منتجات
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}