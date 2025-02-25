import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { userGrowthData } from "../../utils/dummyData";

const UserGrowth = () => {
  return (
    <div className="border border-[#e5e7eb] rounded-2xl p-3">
      <div className="font-medium ">User Growth</div>
      <div>
        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
            data={userGrowthData}
            margin={{ top: 20 }}
            accessibilityLayer
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Active Users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            ></Line>
            <Line
              type="monotone"
              dataKey="Total Users"
              stroke="#82ca9d"
              strokeWidth={2}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowth;
