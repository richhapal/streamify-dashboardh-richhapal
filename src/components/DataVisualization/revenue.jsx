import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import {
  getMonthlyRevenueData,
  getRevenueMonths,
  revenueData,
} from "../../utils/dummyData";
import { useContext, useMemo, useState } from "react";
import { CurrencyContext } from "../../context";
import { Button, DropdownMenu } from "@radix-ui/themes";

const colorShades = [
  "#4E79A7",
  "#F28E2B",
  "#E15759",
  "#76B7B2",
  "#59A14F",
  "#EDC948",
  "#B07AA1",
  "#FF9DA7",
];

// const DROPDOWN_KEY = [
//   {
//     text: "All",
//     value: "all",
//   },
//   {},
// ];

const RevenueChart = () => {
  const { currencyValue } = useContext(CurrencyContext);
  const [selectedMonth, setSelectedMonth] = useState("All");

  const chartData = useMemo(() => {
    const data =
      selectedMonth === "All"
        ? revenueData
        : getMonthlyRevenueData(selectedMonth);
    return data.map((data, index) => ({
      ...data,
      amount: data?.amount * currencyValue,
      fill: `${colorShades[index]}`,
      stroke: `${colorShades[index]}`,
    }));
  }, [currencyValue, selectedMonth]);

  const handleSelect = (item) => {
    setSelectedMonth(item);
  };

  return (
    <div className="border border-[#e5e7eb] rounded-2xl p-3">
      <div className="font-medium  ">Revenue</div>
      <div className="w-full flex items-center justify-end">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger color="gray" variant="soft" highContrast>
            <Button>
              {selectedMonth}
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content color="gray" variant="soft" highContrast>
            {["All", ...getRevenueMonths].map((item) => (
              <DropdownMenu.Item key={item} onSelect={() => handleSelect(item)}>
                {item}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <div>
        <ResponsiveContainer width={"100%"} height={300}>
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="amount"
              label={({ value }) =>
                value.toLocaleString("en-US", { maximumFractionDigits: 0 })
              }
              nameKey="source"
              strokeWidth={0.5}
              strokeDasharray={0}
              fillOpacity={0.5}
              className="font-semibold"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
            >
              <Legend></Legend>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
