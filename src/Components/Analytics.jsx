import React from "react";
import {
  Copy,
  CheckSquare,
  DollarSign,
  CreditCard,
  Wallet,
  Briefcase,
} from "lucide-react";
import StartCard from "./StartCard";
import MetricCircleCard from "./MetricCircleCard";
import SalesDynamics from "./SalesDynamics";
import FinanceCard from "./FinanceCard";
import OverallUserActivity from "./OverallUserActivity";
import CustomerOrder from "./CustomerOrder";

const Analytics = () => {
  const stats = [
    {
      title: "Order",
      value: "201",
      trend: "8.2%",
      isUp: true,
      icon: <Copy size={18} />,
    },
    {
      title: "Approved",
      value: "36",
      trend: "3.4%",
      isUp: true,
      icon: <CheckSquare size={18} />,
    },
    {
      title: "Month Total",
      value: "25410",
      trend: "0.2%",
      isUp: false,
      icon: <DollarSign size={18} />,
    },
    {
      title: "Revenue",
      value: "1352",
      trend: "1.2%",
      isUp: false,
      icon: <CreditCard size={18} />,
    },
  ];

  const userData = [
    { name: "New", value: 62 },
    { name: "Returning", value: 26 },
    { name: "Inactive", value: 12 },
  ];
  const userColors = ["#F59E0B", "#FCD34D", "#ffe18c"];

  const subData = [
    { name: "Paid", value: 70 },
    { name: "Trial", value: 30 },
  ];
  const subColors = ["#3B82F6", "#1E3A8A"];

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 [@media(min-width:450px)]:grid-cols-2 lg:col-span-2 gap-4">
          {stats.map((stat, index) => (
            <StartCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 [@media(min-width:450px)]:grid-cols-2 lg:col-span-2 gap-4">
          <MetricCircleCard
            title="Users"
            value="4,890"
            data={userData}
            colors={userColors}
          />
          <MetricCircleCard
            title="Subscriptions"
            value="1,201"
            data={subData}
            colors={subColors}
          />
        </div>
        <div className="lg:col-span-2">
          <div className="mb-5">
            <SalesDynamics />
          </div>
          <div>
            <OverallUserActivity />
          </div>
        </div>

        <div className="grid grid-cols-1 [@media(min-width:450px)]:grid-cols-2 lg:col-span-2 gap-4">
          <FinanceCard
            title="Paid Invoices"
            amount="$30256.23"
            percentage={15}
            color="#a855f7"
            icon={<Wallet />}
          />
          <FinanceCard
            title="Funds Received"
            amount="$150256.23"
            percentage={59}
            color="#22c55e"
            icon={<Briefcase />}
          />
          
          <div className="[@media(min-width:450px)]:col-span-2">
            <CustomerOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
