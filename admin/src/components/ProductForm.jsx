import { Upload } from "lucide-react";
import { useRef, useEffect } from "react";

export default function ProductForm({
    image,
    setImage,

    name,
    setName,

    price,
    setPrice,

    category,
    setCategory,

    onSubmit,

    title,
    subtitle,
    buttonText,
}) {

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!image && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [image]);


    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-red-900">
                    {title}
                </h1>

                <p className="text-[#9C8C7B] mt-2">
                    {subtitle}
                </p>
            </div>

            <form
                onSubmit={onSubmit}
                className="bg-white border border-[#E7D8C7] rounded-3xl shadow-sm p-8 space-y-7"
            >
                <div>
                    <label className="block mb-3 font-semibold text-[#5A4F47]">
                        صورة المنتج
                    </label>

                    <label
                        htmlFor="image"
                        className="w-44 h-44 border-2 border-dashed border-[#C9B49A] rounded-3xl
                        flex flex-col items-center justify-center cursor-pointer
                        hover:bg-[#FCFAF7] transition"
                    >
                        {image ? (
                            <img
                                src={
                                    image instanceof File
                                        ? URL.createObjectURL(image)
                                        : image
                                }
                                alt="Product"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        ) : (
                            <>
                                <Upload className="w-10 h-10 text-[#C9B49A]" />

                                <span className="mt-3 text-sm text-[#9C8C7B]">
                                    اختر صورة
                                </span>
                            </>
                        )}
                    </label>

                    <input
                        ref={fileInputRef}
                        id="image"
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-[#5A4F47]">
                        اسم المنتج
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسم المنتج"
                        className="w-full border border-[#E7D8C7] rounded-2xl px-4 py-3
                        outline-none focus:border-red-900"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold text-[#5A4F47]">
                            السعر
                        </label>

                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0"
                            className="w-full border border-[#E7D8C7] rounded-2xl px-4 py-3
                            outline-none focus:border-red-900"
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-semibold text-[#5A4F47]">
                            الفئة
                        </label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-[#E7D8C7] rounded-2xl px-4 py-3
                            outline-none focus:border-red-900"
                        >
                            <option value="">اختر الفئة</option>

                            <option value="pajamas">
                                بيجامه
                            </option>

                            <option value="cashat">
                                كاش
                            </option>

                            <option value="pants">
                                بنطلون
                            </option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-2xl transition cursor-pointer"
                >
                    {buttonText}
                </button>
            </form>
        </section>
    );
}