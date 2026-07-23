import { Banknote, CreditCard } from "lucide-react";

export const paymentMethods = [
    {
        title: "الدفع عند الاستلام",
        value: "cod",
        label: "ادفع نقدًا عند استلام طلبك.",
        icon: Banknote,
        disabled: false,
    },
    {
        title: "Visa / MasterCard",
        value: "stripe",
        label: "ادفع بأمان باستخدام Stripe.",
        icon: CreditCard,
        disabled: false,
    },
];