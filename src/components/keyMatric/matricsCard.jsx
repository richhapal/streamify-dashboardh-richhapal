import { Landmark, MicVocal, RadioTower, UserCheck, Users } from "lucide-react";
import TopArtist from "./topArtist";
import {
  currencyIconMap,
  formatNumber,
  formatNumberIntoSuffix,
} from "../../utils/utils";
import { useContext, useMemo } from "react";
import { CurrencyContext } from "../../context";

const keyMatricsDataIconsMap = {
  "All users": <Users />,
  "Active Users": <UserCheck />,
  "Total Streams": <RadioTower />,
  "Total Revenue": <Landmark />,
  "Top Artist": <MicVocal />,
};

const KeyMatricsCard = (props) => {
  const { currencyValue, currency } = useContext(CurrencyContext);
  const { description, title, value } = props || {};
  const amount = useMemo(
    () => (title === "Total Revenue" ? value * currencyValue : value),
    [value, currencyValue]
  );

  return (
    <div className="rounded-2xl shadow-sm border border-[#e5e7eb] p-4 flex flex-col justify-between hover:border-accent/50 overflow-hidden relative  ">
      <div>
        <div className="flex gap-1 items-start justify-between">
          <div className="rounded-full flex items-center justify-center mt-1 order-2">
            {keyMatricsDataIconsMap[title]}
          </div>
          <div>
            <h4 className="font-bold ">{title}</h4>
            <p className="text-neutral-500 text-xs text-pretty">
              {description}
            </p>
          </div>
        </div>
      </div>
      {title === "Top Artist" ? (
        <TopArtist />
      ) : (
        <div className="self-end mt-4 flex items-baseline gap-1 cursor-pointer relative group">
          <p className="relative text-2xl font-bold text-neutral-800 text-accent/90 drop-shadow-sm truncate">
            {title === "Total Revenue" && currencyIconMap[currency]}
            {formatNumberIntoSuffix(amount)}
          </p>
          <span className="tooltip text-xs bg-gray-700 text-white rounded p-1 absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {formatNumber(amount)}
          </span>
        </div>
      )}
    </div>
  );
};

export default KeyMatricsCard;
