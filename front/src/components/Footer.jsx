import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`شكراً لتواصلك معنا ${formData.name}!`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const SocialIcon = ({  href = "#", "aria-label": ariaLabel, children }) => (
    <a 
    href= {href}
    aria-label = {ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-[#6B5C53] hover:text-red-900 transition-colors text-2xl cursor-pointer"
    >
      {children}
    </a>
  )

return (
    <footer className="bg-[#F5EFE8] border-t border-[#C9B49A] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-amiri font-bold text-red-900">
            تواصل معنا
          </h2>

          <p className="mt-4 text-[#6B5C53]">
            يسعدنا دائماً سماع آرائكم والرد على جميع استفساراتكم
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Phone,
              title: "الهاتف",
              value: "+20 100 000 0000",
            },
            {
              icon: Mail,
              title: "البريد الإلكتروني",
              value: "elgizawy104@gmail.com",
            },
            {
              icon: MapPin,
              title: "العنوان",
              value: "المحله - مصر",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-[#C9B49A] rounded-3xl p-8 text-center hover:-translate-y-1 transition duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-900 flex items-center justify-center">

                  <Icon className="w-7 h-7 text-white" />

                </div>

                <h3 className="mt-5 text-xl font-bold text-red-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#6B5C53]">
                  {item.value}
                </p>
              </div>

            );
          })}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white border border-[#C9B49A] rounded-[35px] shadow-sm p-8 mt-20 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none focus:border-red-900"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none focus:border-red-900"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="اكتب رسالتك..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl border border-[#C9B49A] outline-none resize-none focus:border-red-900"
            required
          />

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-red-900 text-white font-bold hover:bg-red-950 transition"
          >
            إرسال الرسالة
          </button>
        </form>

        {/* Footer */}
        <div className="grid md:grid-cols-3 gap-10 mt-24 pt-12 border-t border-[#C9B49A] text-center justify-items-center">
          <div>
            <h3 className="text-3xl font-great-vibes font-bold text-red-900">
              A&2M
            </h3>

            <p className="mt-4 text-[#6B5C53] leading-8">
              متجر متخصص في تقديم ملابس منزلية مريحة بخامات عالية الجودة وتصاميم عصرية تناسب جميع الأذواق.
            </p>

          </div>

          <div>
            <h3 className="text-2xl font-bold text-red-900 mb-5">
                روابط سريعة
            </h3>

            <ul className="space-y-3 text-[#6B5C53]">
                <li>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="cursor-pointer hover:text-red-900 transition"
                    >
                        الرئيسية
                    </ScrollLink>
                </li>

                <li>
                    <Link
                        to="/shop"
                        className="hover:text-red-900 transition"
                    >
                        المتجر
                    </Link>
                </li>

                <li>
                    <ScrollLink
                        to="NewArrivals"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="cursor-pointer hover:text-red-900 transition"
                    >
                        أحدث المنتجات
                    </ScrollLink>
                </li>

                <li>
                    <Link
                        to="/cart"
                        className="cursor-pointer hover:text-red-900 transition"
                    >
                        السلة
                    </Link>
                </li>
            </ul>
        </div>

          <div>
            <h3 className="text-2xl font-bold text-red-900 mb-5">
              تابعنا
            </h3>

            <div className="flex justify-center gap-5 mb-8">
              <SocialIcon href="#" aria-label= "Instagram">
                <i className="fa-brands fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label= "FaceBook">
                <i className="fa-brands fa-facebook"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label= "FaceBook">
                <i className="fa-brands fa-whatsapp"></i>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-[#C9B49A] text-[#6B5C53]">
          ©A&2M 2026 جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;