import StatCard from "../components/dashboard/StatCard";
import { dashboardStats } from "../data/dashboardStats";

import QuickActionCard from "../components/dashboard/QuickActionCard";
import { quickActions } from "../data/quickActions";

import RecentOrders from "../components/dashboard/RecentOrders";

export default function Dashboard() {
    return (
        <>
            <div className="mt-8 sm:mt-10">
                <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 sm:mb-5">
                    إحصائيات المتجر
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                    {dashboardStats.map((item) => (
                        <StatCard
                            key={item.id}
                            title={item.title}
                            value={item.value}
                            icon={item.icon}
                            color={item.color}
                            change={item.change}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8 sm:mt-10">
                <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 sm:mb-5">
                    الإجراءات السريعة
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {quickActions.map((item) => (
                        <QuickActionCard
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            color={item.color}
                            to={item.to}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8 sm:mt-10">
                <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 sm:mb-5">
                    آخر الطلبات
                </h2>

                <RecentOrders />
            </div>
        </>
    );
}