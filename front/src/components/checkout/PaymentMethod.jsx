import { paymentMethods } from "../../data/paymentMethods";

export default function PaymentMethod({
    paymentMethod,
    setPaymentMethod,
}) {
    return (
        <div
            className="bg-white rounded-3xl shadow-lg border border-[#C9B49A] p-8 text-right mt-9"
        >
            <h2 className="text-3xl font-Amiri text-red-900">
                طريقة الدفع
            </h2>

            <p className="text-gray-500 mt-2">
                اختر وسيلة الدفع التي تناسبك لإكمال الطلب.
            </p>

            <div className="flex flex-col gap-5 mt-8">
                {paymentMethods.map(
                    ({
                        title,
                        icon: Icon,
                        value,
                        label,
                        disabled,
                    }) => (
                        <label
                            key={value}
                            htmlFor={value}
                            className={` block rounded-2xl border p-5 transition-all duration-300
                                ${
                                    disabled
                                        ? "opacity-60 cursor-not-allowed"
                                        : "cursor-pointer hover:shadow-md hover:border-red-700"
                                }
                                ${
                                    paymentMethod === value
                                        ? "border-red-900 bg-red-50"
                                        : "border-[#C9B49A]"
                                }
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    id={value}
                                    type="radio"
                                    value={value}
                                    checked={paymentMethod === value}
                                    onChange={() =>
                                        setPaymentMethod(value)
                                    }
                                    disabled={disabled}
                                    className=" peer w-[18px] h-[18px] accent-red-900"
                                />

                                <Icon
                                    className={` w-7 h-7
                                        ${
                                            paymentMethod === value
                                                ? "text-red-900"
                                                : "text-gray-500"
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        font-medium
                                        ${
                                            paymentMethod === value
                                                ? "text-red-900"
                                                : "text-[#5A4F47]"
                                        }
                                    `}
                                >
                                    {title}
                                </span>
                            </div>

                            <p className="mr-10 mt-2 text-sm text-gray-500">
                                {label}
                            </p>
                        </label>
                    )
                )}
            </div>
        </div>
    );
} 