import Header from "./Header";
import KeyMatrics from "./keyMatric";
import DataVisualization from "./DataVisualization";
import SongTable from "./songTable";

const MainLayout = () => {
  return (
    <>
      <Header />
      <KeyMatrics />
      <DataVisualization />
      <SongTable />
    </>
  );
};

export default MainLayout;
