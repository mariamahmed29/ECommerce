import { memo, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { ShopContext } from "../context/ShopContext";
import {
  Home,
  LayoutGrid,
  Sparkles,
  ShoppingBag,
  Phone,
  ShoppingCart,
  User,
} from "lucide-react";

export const menuItemsData = [
  {
    to: "home",
    type: "scroll",
    label: "الصفحة الرئيسية",
    icon: <Home className="w-5 h-5" />,
  },
  {
    to: "categoriesCard",
    type: "scroll",
    label: "الفئات",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    to: "NewArrivals",
    type: "scroll",
    label: "احدث المنتجات",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    to: "/shop",
    type: "route",
    label: "تسوق",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    to: "contact",
    type: "scroll",
    label: "تواصل معنا",
    icon: <Phone className="w-5 h-5" />,
  },
];

const MenuItems = ({ setSideBarOpen, isMobile }) => {
  const { getTotalCartItems, token, logout } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const totalItems = getTotalCartItems();
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const closeSidebar = () => {
    setSideBarOpen?.(false);
  };

  const handleLogout = () => {
    logout()
    navigate("/auth");
    closeSidebar();
  };

  const handleScrollNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -100,
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }

    closeSidebar();
  };

  const linkBase = isMobile
    ? "flex items-center gap-2 px-4 py-2 text-[#5a4f47] text-sm font-medium tracking-wide hover:text-[#e0dbd5] rounded-full hover:bg-red-900 transition-all cursor-pointer w-full"
    : "flex items-center gap-1 px-3 py-2 text-[#5a4f47] text-sm tracking-wide hover:text-[#e0dbd5] hover:bg-red-900 rounded-full transition-colors cursor-pointer";

  const activeClass = "font-semibold bg-red-900 text-[#e0dbd5]";

  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col gap-1 w-full"
          : "flex-row items-center justify-center gap-2 w-full"
      }`}
    >
      {menuItemsData.map(({ to, label, icon, type }) => {
        if (type === "route") {
          return (
            <button
              key={to}
              onClick={() => {
                navigate("/shop");
                closeSidebar();
              }}
              className={`relative ${linkBase} ${
                location.pathname === "/shop" ? activeClass : ""
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          );
        }

        if (location.pathname === "/") {
          return (
            <ScrollLink
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-100}
              spy
              hashSpy
              className={linkBase}
              activeClass={activeClass}
              onClick={closeSidebar}
            >
              {icon}
              <span>{label}</span>
            </ScrollLink>
          );
        }

        return (
          <button
            key={to}
            onClick={() => handleScrollNavigation(to)}
            className={linkBase}
          >
            {icon}
            <span>{label}</span>
          </button>
        );
      })}

      {/* Cart */}
      <button
        onClick={() => {
          navigate("/cart");
          closeSidebar();
        }}
        className={`relative ${linkBase} ${
          location.pathname === "/cart" ? activeClass : ""
        }`}
      >
        <ShoppingCart className="w-5 h-5" />
        <span>عربة الشراء</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold text-[#e0dbd5] bg-red-800 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Login / Logout */}
      {!token ? (
        <button
          onClick={() => {
            navigate("/auth");
            closeSidebar();
          }}
          className={`${linkBase} bg-red-900 hover:bg-red-950 text-[#e0dbd5]`}
        >
          تسجيل الدخول
        </button>
      ) : (
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-transparent border-2 border-red-900 text-red-900 text-sm font-medium hover:bg-red-900 hover:text-[#e0dbd5] transition-colors cursor-pointer"
        >
          تسجيل الخروج
        </button>
      )}


      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-90">
            <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-xl">
                <h2 className="text-2xl font-bold text-red-900 text-center">
                    تسجيل الخروج
                </h2>

                <p className="text-center text-gray-600 mt-4">
                    هل أنت متأكد أنك تريد تسجيل الخروج؟
                </p>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => {
                            handleLogout();
                            setShowLogoutModal(false);
                        }}
                        className="flex-1 bg-red-900 text-white py-3 rounded-xl
                            hover:bg-red-800 transition cursor-pointer"
                    >
                        نعم
                    </button>

                    <button
                        onClick={() => setShowLogoutModal(false)}
                        className="flex-1 border border-[#C9B49A] py-3 rounded-xl
                            hover:border-red-900 hover:text-red-900 transition cursor-pointer"
                    >
                        إلغاء
                    </button>
                </div>
            </div>
        </div>
    )}
    </div>



  );
};

export default memo(MenuItems);