import { lazy, Suspense } from "react";

const RevenueChart = lazy(() => import("./revenue"));
const SongChart = lazy(() => import("./songChart"));
const UserGrowth = lazy(() => import("./userGrowth"));

const DataVisualization = () => {
  return (
    <div className="p-3">
      <div className="my-5">
        <span className="font-bold text-xl">Data Visualization</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 py-1 gap-5">
        <Suspense fallback={<div>Loading...</div>}>
          <UserGrowth />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SongChart />
        </Suspense>
      </div>
    </div>
  );
};

export default DataVisualization;
