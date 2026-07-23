import { Truck, ReceiptText, BadgePercent } from "lucide-react";

export default function OrderTotals({
    subtotal,
    shippingCost,
    discount,
    total,
    onConfirm,
}) {
    return (
        <div className="mt-8 border-t border-[#C9B49A] pt-6">

            <div className="space-y-4">

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                        <ReceiptText className="w-5 h-5" />
                        <span>إجمالي المنتجات</span>
                    </div>

                    <span className="font-semibold text-red-900">
                        {subtotal} $
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Truck className="w-5 h-5" />
                        <span>الشحن</span>
                    </div>

                    <span>{shippingCost} $</span>
                </div>

                {discount > 0 && (
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-green-600">
                            <BadgePercent className="w-5 h-5" />
                            <span>الخصم</span>
                        </div>

                        <span className="text-green-600">
                            - {discount} $
                        </span>
                    </div>
                )}

                <hr className="border-[#C9B49A]" />

                <div className="flex justify-between items-center text-xl font-bold">
                    <span>الإجمالي</span>

                    <span className="text-red-900">
                        {total}$
                    </span>
                </div>

                <button
                    onClick={onConfirm}
                    className="w-full mt-6 py-4 rounded-2xl bg-red-900 text-white font-semibold hover:bg-red-950 transition-all"
                >
                    تأكيد الطلب
                </button>

            </div>

        </div>
    );
}