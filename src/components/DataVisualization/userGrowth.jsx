// const cartData = {
//   labels,
//   datasets: [
//     {
//       label: "Active Users",
//       data: activeUsersData,
//       backgroundColor: "rgba(75, 192, 192, 0.5)",
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 2,
//       fill: true,
//       pointRadius: 4,
//     },
//     {
//       label: "Total Users",
//       data: usersData,
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 2,
//       fill: true,
//       pointRadius: 4,
//     },
//   ],
// };
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
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Active Users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            ></Line>
            <Line type="monotone" dataKey="Total Users" stroke="#82ca9d"></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowth;
