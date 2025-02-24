import { useEffect, useState } from "react";
import { mostStreamedSongsLast30Days } from "../../utils/dummyData";
import { formatNumberIntoSuffix } from "../../utils/utils";

const TopArtist = () => {
  const [topArtist, setTopArtist] = useState(mostStreamedSongsLast30Days[0]);

  useEffect(() => {
    let maxSteamSong = mostStreamedSongsLast30Days[0];
    for (let i = 1; i < mostStreamedSongsLast30Days.length; i++) {
      if (
        mostStreamedSongsLast30Days[i].totalStreams > maxSteamSong.totalStreams
      ) {
        maxSteamSong = mostStreamedSongsLast30Days[i];
      }
    }
    setTopArtist(maxSteamSong);
  }, []);

  return (
    <div className="mt-2">
      {/* <div className="font-medium text-sm text-gray-500">Artist Name</div> */}
      <div className="font-bold text-xl ">{topArtist.artist}</div>
      <div className="font-medium text-sm ">
        {topArtist.song} (
        {formatNumberIntoSuffix(Number(topArtist.totalStreams))} Views)
      </div>
    </div>
  );
};

export default TopArtist;
