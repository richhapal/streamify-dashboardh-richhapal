import { useState, useMemo } from "react";
import { Button, Table, TextField } from "@radix-ui/themes";
import { recentStreams } from "../../utils/dummyData";
import { FilterIcon, SearchIcon, X } from "lucide-react";
import SongSearchInput from "./searchInput";

const TableColumns = [
  { name: "Song Name", id: "songName" },
  { name: "Artist", id: "artist" },
  { name: "Date Streamed", id: "dateStreamed" },
  { name: "Stream Count", id: "streamCount" },
  { name: "User Id", id: "userId" },
];

const SongTable = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "songName",
    direction: "ascending",
  });
  const [searchSong, setSearchSong] = useState("");

  const sortedStreams = useMemo(() => {
    const filteredData = recentStreams.filter((song) =>
      song.songName.toLowerCase().includes(searchSong.toLowerCase())
    );
    const sortedData = [...filteredData];

    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  }, [sortConfig, searchSong]);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortDirection = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "↑" : "↓";
    }
    return "";
  };

  return (
    <div className="p-3">
      <div className="my-5 flex justify-between items-center">
        <div>
          <span className="font-bold text-xl">
            Recent Steamed Songs Data Table
          </span>
        </div>
        <div className="flex items-center gap-3">
          <SongSearchInput setSearchSong={setSearchSong} />
        </div>
      </div>
      <div>
        <Table.Root size="2">
          <Table.Header>
            <Table.Row>
              {TableColumns.map((column) => (
                <Table.ColumnHeaderCell
                  key={column.id}
                  onClick={() => handleSort(column.id)}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    {column.name} {getSortDirection(column.id)}
                    <FilterIcon size={20} />
                  </div>
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sortedStreams.map((stream, index) => (
              <Table.Row key={index}>
                <Table.RowHeaderCell>{stream.songName}</Table.RowHeaderCell>
                <Table.Cell>{stream.artist}</Table.Cell>
                <Table.Cell>{stream.dateStreamed}</Table.Cell>
                <Table.Cell>{stream.streamCount}</Table.Cell>
                <Table.Cell>{stream.userId}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default SongTable;
