import { SquarePlus, ShoppingBag, Package, } from "lucide-react"

export const quickActions = [
    {
        id: 1, 
        title: "إضافة منتج",
        icon: SquarePlus,
        to: "/admin/products/add",
        color: "#2563EB",
    },
    {
        id: 2, 
        title: "المنتجات",
        icon: ShoppingBag,
        to: "/admin/products",
        color: "#EA580C",
    },
    {
        id: 3, 
        title: "الطلبات",
        icon: Package,
        to: "/admin/orders",
        color: "#16A34A",
    },
]

