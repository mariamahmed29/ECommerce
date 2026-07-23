import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import MenuItems from "./MenuItems";

const SocialIcon = ({  href = "#", "aria-label": ariaLabel, children }) => (
  <a 
  href= {href}
  aria-label = {ariaLabel}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center text-red-900 hover:text-red-950 transition-colors text-2xl"
  >
    {children}
  </a>
)

const Header = () => {
  // ----------------- Logic -----------------
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) setSideBarOpen(false);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // ----------------- Design -----------------
  return(
    <>
      {/* ─── DESKTOP HEADER ─── */}
      <header
        className="hidden md:block bg-[#f5f2ef] border-b border-[#e0dbd5] w-full fixed top-0 right-0 left-0 z-50"
      >
         {/* Top Bar */}
          <div
            className="flex items-center justify-between px-8 py-3 border-b border-[#e0dbd5]"
          >
            <button
              className="text-[#e0dbd5] bg-red-900 hover:bg-transparent hover:text-red-900 hover:border-2 hover:border-red-900 
                    py-1.5 px-2.5 rounded-4xl tracking-wide transition-colors cursor-pointer"
            >
              عرض الكل
            </button>

            <h1
              className="text-red-900 font-great-vibes text-5xl tracking-wide leading-none"
            >
              A&2M 
            </h1>

            <div 
              className="flex items-center gap-4"
            >
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

          {/* Nav Bar */}
          <nav
            className="flex items-center justify-center px-8 py-3"
          >
            <MenuItems isMobile={false}/>
          </nav>
      </header>

      {/* ─── MOBILE HEADER ─── */}
      <header
        className="md:hidden flex items-center justify-between h-16 px-5 
                  fixed top-0 left-0 w-full z-50 bg-[#f5f2ef] border-b border-[#e0dbd5] shadow-sm"
      >
        <div className="font-great-vibes text-3xl text-red-900 leading-none">
          A&2M
        </div>

        <button 
          onClick={() => setSideBarOpen(true)}
          className="text-red-900 p-2 rounded-lg hover:text-red-950 transition-all"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* ─── SIDEBAR (Mobile) ─── */}
      <aside
        className= {`
          fixed top-0 left-0 h-screen w-72 z-50
          bg-[#f5f2ef] border-l border-[#e0dbd5] shadow-2xl
          transition-transform duration-500
          ${sideBarOpen ? "translate-x-0" : "-translate-x-90"}
            `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSideBarOpen(false)}
            className="text-red-900 p-2 rounded-lg hover:text-red-950 transition-all"
            aria-label="Close menu"
          >
            <X className="w-6 h-6"/>
          </button>
        </div>

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

        <div className="px-6">
          <MenuItems isMobile={true} setSideBarOpen={setSideBarOpen}/>
        </div>
      </aside>

       {/* ─── OVERLAY ─── */}
        {sideBarOpen && (
          <div
            onClick={() => setSideBarOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/40  backdrop-blur-sm"
          />
        )}

    </>
  )
}

export default Header