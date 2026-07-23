import pajamas_1 from "../assets/pajamas/pajamas_1.jpg";
import pajamas_2 from "../assets/pajamas/pajamas_2.jpg";
import pajamas_3 from "../assets/pajamas/pajamas_3.jpg";

import cashat_1 from "../assets/cashat/cashat_1.jpg";
import cashat_2 from "../assets/cashat/cashat_2.jpg";
import cashat_3 from "../assets/cashat/cashat_3.jpg";

import pants_1 from "../assets/pants/pants_1.jpg";
import pants_2 from "../assets/pants/pants_2.jpg";

export const categories = [
    {
        name: "الكل",
        value: "all",
    },
    {
        name: "بيجامات",
        value: "pajamas",
    },
    {
        name: "كاشات",
        value: "cashat",
    },
    {
        name: "بناطيل",
        value: "pants",
    },
];

export const emptyMessages = {
    all: "لا توجد منتجات حالياً.",
    pajamas: "لا توجد بيجامات حالياً.",
    cashat: "لا توجد كاشات حالياً.",
    pants: "لا توجد بناطيل حالياً.",
};

const isNew = false;

export const products = [
    {
        _id: 1,
        name: "بيجامة",
        image: pajamas_1,
        category: "pajamas",
        price: 130,
        oldPrice: 150,
        description: "بيجامة ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
    {
        _id: 2,
        name: "بيجامة",
        image: pajamas_2,
        category: "pajamas",
        price: 130,
        oldPrice: 150,
        description: "بيجامة ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
    {
        _id: 3,
        name: "كاش",
        image: cashat_1,
        category: "cashat",
        price: 130,
        oldPrice: 150,
        description: "كاش ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
    {
        _id: 4,
        name: "كاش",
        image: cashat_2,
        category: "cashat",
        price: 130,
        oldPrice: 150,
        description: "كاش ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
    {
        _id: 5,
        name: "بنطلون",
        image: pants_1,
        category: "pants",
        price: 130,
        oldPrice: 150,
        description: "بنطلون ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
    {
        _id: 6,
        name: "بنطلون",
        image: pants_2,
        category: "pants",
        price: 130,
        oldPrice: 150,
        description: "بنطلون ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: isNew,
    },
        {
        _id: 7,
        name: "كاش",
        image: cashat_3,
        category: "cashat",
        price: 130,
        oldPrice: 150,
        description: "كاش ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: true,
    },
        {
        _id: 8,
        name: "بيجامة",
        image: pajamas_3,
        category: "pajamas",
        price: 130,
        oldPrice: 150,
        description: "بيجامة ناعمة ومريحة.",
        colors: ["#000000", "#FFC0CB"],
        quantity: 12,
        isNew: true,
    },
]