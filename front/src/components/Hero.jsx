import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return(
    <>
      <section 
        className="relative flex flex-col items-center justify-center bg-[#EDE3D8] w-full min-h-[85vh]"
      >
        <span
          aria-hidden="true"
          className="absolute top-[120px] left-10 block border-t-2 border-l-2 border-[#C9B49A] w-10 h-10 md:w-20 md:h-20"
        />
        <span
          aria-hidden="true"
          className="absolute top-[120px] right-10 block border-t-2 border-r-2 border-[#C9B49A] w-10 h-10 md:w-20 md:h-20"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[40px] left-10 block border-b-2 border-l-2 border-[#C9B49A] w-10 h-10 md:w-20 md:h-20"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[40px] right-10 block border-b-2 border-r-2 border-[#C9B49A] w-10 h-10 md:w-20 md:h-20"
        />


        <div className="absolute top-1/3 left-0 right-0 flex items-center justify-center gap-6 px-6 md:px-24">
          <span
            aria-hidden="true"
            className="flex-1 h-[0.5px] bg-[#C9B49A] max-w-[80px]  md:max-w-[160px]"
          />
          <p
            className="tracking-widest text-xs text-[#9B7B60] font-segoe" 
          >
            كولكشن جديد 2026
          </p>
          <span
            aria-hidden="true"
            className="flex-1 h-[0.5px] bg-[#C9B49A] max-w-[80px]  md:max-w-[160px]"
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        >
          <h1
            className="text-red-900 font-bold leading-tight italic text-[clamp(2.5rem,6vw,4.5rem)] font-great-vibes mt-4"
          >
            مفهوم جديد للأناقة
          </h1>

          <p
            className="text-[#9B7B60] italic text-base md:text-lg font-segoe"
          >أناقتك .. هويتنا</p>

          <nav className="flex flex-wrap items-center justify-center gap-4 mt-3">
            <Link
                to="/shop"
                smooth
                spy
                hashSpy
                duration={500}
                offset={-80}
                className="bg-red-900 hover:bg-red-950 text-[#F5EFE8]
                  rounded-4xl px-8 py-3 text-sm text-center tracking-widest
                  transition-colors duration-300 cursor-pointer hover:scale-105"
            >
              تسوق الآن
            </Link>
            
            <ScrollLink
                to="categoriesCard"
                smooth
                spy
                hashSpy
                duration={500}
                offset={-80}
                className="bg-transparent text-red-900 border-2 border-red-900
                  rounded-4xl px-8 py-3 text-sm text-center tracking-widest 
                  transition-colors duration-300 cursor-pointer hover:scale-105" 
            >
              اكتشف
            </ScrollLink>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Hero