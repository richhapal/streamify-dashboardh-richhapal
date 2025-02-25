import { memo } from "react";
import CurrencySelector from "../GenericComponent/CurrencySelector";

const Header = () => {
  return (
    <div className=" p-3 w-full min-h-12 flex items-center shadow-lg shadow-b-lg justify-between">
      <span className="uppercase font-bold text-xl flex gap-1 text-[#ff3434] ">
        Steamify Dashboard
      </span>
      <CurrencySelector />
    </div>
  );
};

export default memo(Header);
