import { menuItems } from "../data/sidebarMenu";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

    return (
        <aside 
            className={`w-72 min-h-screen bg-white border-l border-[#E7D8C7] p-5 shadow-sm
                    fixed top-[70px] right-0 z-50 transition-all duration-300
                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
                    md:static md:translate-x-0
                `}
        >
            <div
                className="flex flex-col items-center gap-1 bg-[#F8F4EF] border border-red-900 rounded-2xl px-4 py-2"
            >
                <h2
                    className="text-sm font-great-vibes text-red-900"
                >
                    
                    A&2M 
                </h2>
                <span
                    className=" text-xs text-gray-500"
                >
                    لوحة التحكم
                </span>
            </div>

            <div className="flex flex-col justify-center space-y-3 p-3">
                {menuItems.map(( { to, label, icon: Icon } ) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === "/admin"}
                        onClick={() =>{
                            if (window.innerWidth < 768) {
                                setIsSidebarOpen(false);
                            }                            
                        }}
                        className={({ isActive }) => 
                            `
                                flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-300 text-[#7b6f6c]
                                ${
                                    isActive 
                                    ? "bg-red-900 border border-red-900 shadow-lg text-white"
                                    : "border border-[#E7D8C7] hover:bg-[#F8F4EF] hover:border-red-900 hover:text-red-900 hover:scale-[1.02] hover:-translate-x-1"
                                }
                            `
                        }
                        
                    >
                        <Icon size={20} className="shrink-0" />
                        {label}
                    </NavLink>
                ))}
            </div>
        </aside>
    )
}
