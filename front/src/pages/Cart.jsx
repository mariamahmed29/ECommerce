import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Trash2, Minus, Plus, } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const {
    cartItems,
    allProducts,
    addToCart,
    removeFromCart,
    backendUrl
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const cartProducts = Object.keys(cartItems).map((id) => {
    const product = allProducts.find(
        (p) => p._id === id
      );

    if (!product) return null;

    return{
      ...product,
      quantity: cartItems[id],
    }
  }).filter(Boolean);

  const totalPrice = cartProducts.reduce(
    (totle, item) => totle + item.price * item.quantity, 0)

  return(
    <>
      <section className="min-h-screen bg-[#F5EFE8] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-red-900 font-amiri">سلة التسوق</h1>
            <p className="text-[#5A4F47] mt-3">راجع منتجاتك قبل إتمام عملية الشراء</p>
          </div>

          {cartProducts.length === 0 ? (
            <div className="bg-white border border-[#C9B49A] rounded-[35px] shadow-lg p-16 flex flex-col items-center">
              <ShoppingBag className="w-20 h-20 text-[#C9B49A]" />
              <h2 className="text-3xl font-bold text-red-900 mt-6">
                السلة فارغة
              </h2>

              <p className="text-[#5A4F47] mt-3">
                لم تقم بإضافة أي منتجات حتى الآن.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="mt-8 bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-950 transition"
              >
                ابدأ التسوق
              </button>
            </div>

          ) : (

            <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
              <div className="bg-white border border-[#C9B49A] rounded-[35px] shadow-lg p-8 h-fit">
                <h2 className="text-3xl font-bold text-red-900 mb-6">
                  ملخص الطلب
                </h2>

                <div className="flex justify-between items-center border-b border-[#E5D8C7] pb-4">
                  <span className="text-[#5A4F47]">
                    عدد المنتجات
                  </span>

                  <span className="font-bold text-red-900">
                    {cartProducts.length}
                  </span>
                </div>

                <div className="flex justify-between items-center py-6 border-b border-[#E5D8C7]">
                  <span className="text-[#5A4F47]">
                    الإجمالي
                  </span>

                  <span className="text-3xl font-bold text-red-900">
                    {totalPrice}$
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-8 bg-red-900 text-white py-4 rounded-full font-semibold hover:bg-red-950 transition flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={20} />
                  إتمام الطلب
                </button>

                <button
                  onClick={() => navigate("/shop")}
                  className="w-full mt-4 border border-red-900 text-red-900 py-4 rounded-full font-semibold hover:bg-red-900 hover:text-white transition"
                >
                  متابعة التسوق
                </button>
              </div>

              <div className="space-y-6">
                {cartProducts.map((item) => (
                  <div 
                    key={item._id} 
                    className="bg-white border border-[#C9B49A] rounded-[30px] shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                    <div className="flex items-center gap-6">
                      <img
                        src={`${backendUrl}/images/${item.image}`}
                        alt={item.name}
                        className="w-36 h-36 rounded-3xl object-cover border border-[#C9B49A]"
                      />

                      <div>
                        <h2 className="text-2xl font-bold text-red-900">
                          {item.name}
                        </h2>

                        <p className="text-[#5A4F47] mt-2">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-3 mt-4">

                          <span className="text-red-900 font-bold text-xl">
                            {item.price}$
                          </span>

                          {item.oldPrice && (
                            <span className="text-gray-400 line-through">
                              {item.oldPrice}$
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="w-11 h-11 rounded-full border border-[#C9B49A] flex items-center justify-center hover:bg-red-900 hover:text-white transition"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="text-xl font-bold w-10 text-center text-red-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => addToCart(item._id)}
                          className="w-11 h-11 rounded-full border border-[#C9B49A] flex items-center justify-center hover:bg-red-900 hover:text-white transition"
                        >
                          <Plus size={18} />
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item._id, true)}
                        className="flex items-center gap-2 text-red-900 hover:text-red-700 transition"
                      >
                        <Trash2 size={18} />
                        حذف المنتج
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Cart;