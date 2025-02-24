import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { topSortedMostStreamedSongsLast30Days } from "../../utils/dummyData";
import { formatNumberIntoSuffix } from "../../utils/utils";

const SongChart = () => {
  const chartDataForTop5Song = topSortedMostStreamedSongsLast30Days.slice(0, 5);

  // Calculate the maximum value for the Y-axis
  const maxTotalStreams = Math.max(
    ...chartDataForTop5Song.map((song) => song.totalStreams)
  );

  return (
    <div className="border border-[#e5e7eb] rounded-2xl p-3">
      <div className="font-medium">Most Streamed Songs</div>
      <div>
        <ResponsiveContainer width={"100%"} height={300}>
          <BarChart accessibilityLayer data={chartDataForTop5Song} barSize={40}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="song"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={10}
              className="font-medium text-sm"
              interval={0}
            />
            <YAxis
              domain={[0, maxTotalStreams * 1.1]} // Set the domain with a 10% buffer
              tickLine={false}
              axisLine={false}
              className="font-medium text-sm"
              tickCount={5}
              fontSize={10}
              tickFormatter={(value) => formatNumberIntoSuffix(value)} // Add this line
            />
            <Bar
              dataKey="totalStreams"
              fill="#1E5829"
              radius={[8, 8, 0, 0]}
              strokeWidth={1}
              activeIndex={0}
              fillOpacity={0.5}
              stroke="#1E5829"
              activeBar={({ ...props }) => {
                return <Rectangle {...props} fillOpacity={0.7} />;
              }}
            >
              <LabelList
                dataKey="totalStreams"
                position="top"
                offset={8}
                fontSize={12}
                formatter={(value) => formatNumberIntoSuffix(value)}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SongChart;
