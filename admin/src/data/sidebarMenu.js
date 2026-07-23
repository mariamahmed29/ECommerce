import { LayoutDashboard, Package, SquarePlus, ShoppingBag, } from "lucide-react";

export const menuItems = [
    {
        to: "/admin",
        label: "الرئيسية",
        icon: LayoutDashboard,
    },
    {
        to: "/admin/products",
        label: "المنتجات",
        icon: ShoppingBag,
    },
    {
        to: "/admin/products/add",
        label: "إضافة منتج",
        icon: SquarePlus,
    },
    {
        to: "/admin/orders",
        label: "الطلبات",
        icon: Package,
    },
];