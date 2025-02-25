import { memo } from "react";
import { keyMatricsData } from "../../utils/dummyData";
import KeyMatricsCard from "./matricsCard";

const KeyMatrics = () => {
  return (
    <div className="p-3">
      <div className="my-5">
        <div className="font-bold text-xl">Key Matrics</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 py-1 gap-5">
        {keyMatricsData.map((data) => (
          <KeyMatricsCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};
export default memo(KeyMatrics);
