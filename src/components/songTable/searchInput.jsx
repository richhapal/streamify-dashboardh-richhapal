import { Button, TextField } from "@radix-ui/themes";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";

const SongSearchInput = ({ setSearchSong }) => {
  const [searchSongInput, setSearchSongInput] = useState("");
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSearch = debounce((value) => {
    setSearchSong(value);
  }, 600);

  const handleSearchSong = (e) => {
    setSearchSongInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <>
      {searchSongInput && (
        <Button
          className="cursor-pointer"
          onClick={() => {
            setSearchSong("");
            setSearchSongInput("");
          }}
        >
          <X />
        </Button>
      )}
      <TextField.Root
        value={searchSongInput}
        placeholder="Search by songs"
        onChange={handleSearchSong}
      >
        <TextField.Slot>
          <SearchIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </>
  );
};
export default SongSearchInput;
