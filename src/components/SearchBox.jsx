import React from "react";
import { DebounceInput } from "react-debounce-input";

const SearchBox = ({ input, setInput }) => {
  return (
    <div>
      <DebounceInput
        type="text"
        name="photo Search"
        placeholder="Search here "
        className="searchBox"
        value={input}
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
