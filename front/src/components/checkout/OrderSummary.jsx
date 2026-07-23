import CartItem from "../checkout/CartItem"
import OrderTotals from "../checkout/OrderTotals";


export default function OrderSummary({
    orderItems,
    subtotal,
    shippingCost,
    discount,
    total,
    handleConfirmOrder,
}) {
    return(
        <div 
        className="bg-white rounded-3xl shadow-lg border border-[#C9B49A] text-right p-8 mt-9"
        >
            <h2
                className="text-3xl font-segoe text-red-900"
            >ملخص الطلب</h2>

            <div>
                {orderItems.map((item) => (
                    <CartItem
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>

            <OrderTotals
                subtotal={subtotal}
                shippingCost={shippingCost}
                discount={discount}
                total={total}
                onConfirm={handleConfirmOrder}
            />

        </div>
    )

}
