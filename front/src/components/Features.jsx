import { Truck, ShieldCheck, Wallet, Headphones, } from "lucide-react"

const featuresData = [
  {
    Icon: ShieldCheck,
    title: "جودة مضمونة",
    desc: "منتجات مريحه و ناعمه",
  },
  {
    Icon: Truck,
    title: "توصيل",
    desc: "توصيل لجميع انحاء مصر"
  },
  {
    Icon: Wallet,
    title: "دفع آمن",
    desc: "تجربة شراء امنة و مضمونه"
  },
  {
    Icon: Headphones,
    title: "دعم مستمر",
    desc: "متاح 24/7 لخدمتك"
  },
];

const Features = () => {

  return (
    <section className="pb-12 bg-[#F8F4EF] flex items-center justify-center">
      <div className="p-9 border border-[#C9B49A] shadow-sm rounded-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {featuresData.map(({ Icon, title, desc }, index) => (
            <div
              key={index}
              className="group flex items-center justify-center"
            >
              <div
                className="px-9 py-2 rounded-full bg-transparent flex items-center justify-center"
              >
                <Icon className="w-10 h-10 text-red-900" />
              </div>

            <div className="">
                <h3 className="text-lg font-semibold font-bold text-red-900 mb-4">
                  {title}
                </h3>

                <p className="text-[#7A6A60] text-sm leading-6">
                  {desc}
                </p>
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features