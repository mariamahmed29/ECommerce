import { useContext, useEffect, useState } from "react";
import {
    useNavigate,
    useSearchParams,
    useLocation,
} from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";

import {
    CheckCircle,
    XCircle,
    Loader2,
} from "lucide-react";

export default function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const isCOD = location.state?.isCOD;
  const { backendUrl, token, clearCart, } = useContext(ShopContext);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // ================= COD =================
    if (isCOD) {
      clearCart();
      setStatus("success");

      setTimeout(() => {
          navigate("/shop");
      }, 3000);

      return;
    }

    // ================= Stripe =================
    const verifyPayment = async () => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/order/verify`,
          {
              success,
              orderId,
          },
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
        );

        if (response.data.success) {
          await clearCart();
          setStatus("success");

          setTimeout(() => {
              navigate("/shop");
          }, 3000);
        } else {
          setStatus("error");
          setTimeout(() => {
              navigate("/");
          }, 3000);
        }

        } catch (err) {
          console.log(err);
          setStatus("error");
          setTimeout(() => {
              navigate("/");
          }, 3000);
      }
    };

    if (success && orderId && token) {
      verifyPayment();
    } else if (!isCOD) {
      setStatus("error");
    }
  }, []);

  return (
    <section
      className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-6 py-20"
    >
      <div
        className="bg-white rounded-[35px] border border-[#C9B49A] shadow-lg max-w-lg w-full p-10 text-center"
      >
        {status === "loading" && (
          <>
            <div
                className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mx-auto"
            >
              <Loader2
                  className="w-12 h-12 text-red-900 animate-spin"
              />
            </div>
            <h2
                className="mt-8 text-4xl font-Amiri text-red-900"
            >
                جاري التحقق...
            </h2>

            <p
              className="text-gray-500 mt-4 leading-8"
            >
              يرجى الانتظار أثناء معالجة طلبك.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div
              className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto"
            >
              <CheckCircle
                className="w-14 h-14 text-green-600"
              />
            </div>

            <h2
              className="mt-8 text-4xl font-Amiri text-green-700"
            >
              {isCOD
                  ? "تم استلام طلبك بنجاح"
                  : "تم الدفع بنجاح "}
            </h2>

            <p
              className="text-gray-500 mt-4 leading-8"
            >
              {isCOD
                  ? "تم تسجيل طلبك وسيتم التواصل معك قريبًا لتأكيده."
                  : "شكراً لك، تم تأكيد عملية الدفع بنجاح."}
            </p>

            <div className="border-t border-[#C9B49A] my-8"></div>

            {!isCOD && orderId && (
                <div>
                  <p className="text-gray-500">
                    رقم الطلب
                  </p>

                  <p
                    className="mt-2 font-semibold text-red-900 break-all"
                  >
                    {orderId}
                  </p>
                </div>
            )}

            <button
              onClick={() => navigate("/shop")}
              className="mt-10 w-full py-4 rounded-2xl bg-red-900 text-white font-semibold hover:bg-red-950 transition"
            >
              متابعة التسوق
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div
              className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto"
            >
              <XCircle
                className="w-14 h-14 text-red-600"
              />
            </div>

            <h2
              className="mt-8 text-4xl font-Amiri text-red-700"
            >
              فشل التحقق من الطلب
            </h2>

            <p
              className="text-gray-500 mt-4 leading-8"
            >
              حدثت مشكلة أثناء معالجة الطلب.
              <br />
              يرجى المحاولة مرة أخرى.
            </p>

            <button
              onClick={() => navigate("/")}
              className=" mt-10 w-full py-4 rounded-2xl bg-red-900 text-white font-semibold hover:bg-red-950 transition"
            >
              العودة للرئيسية
            </button>
          </>
        )}
      </div>
    </section>
  );
}